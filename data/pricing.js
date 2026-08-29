// Motor de precios por componentes — AHOMED
//
// Qué hace: cada "opción" de un servicio (Esencial/Inteligente/Completa) ya
// no lleva su lista de items y su total escritos a mano. En su lugar,
// declara una lista de LÍNEAS que referencian componentes de
// data/pricing-catalog.json, y esta función las expande a la forma
// {nombre, items, total} que ya consumen las vistas (partials/option-card.ejs,
// services/detalle.ejs, etc.) — así no hace falta tocar ni una plantilla.
//
// Formato de una línea:
//   { ref: "id_del_componente", cantidad: 1 }                 -> material/dispositivo/tramite
//   { ref: "mo_electricista_hora", horas: 4 }                 -> mano de obra (precio × horas)
//   { ref: "motor_persiana_wifi", cantidad: 4, horasPrimera: 4.5, horasAdicional: 2.5, horasRef: "mo_domotica_hora" }
//                                                              -> dispositivo con mano de obra por volumen
//   { ref: "cuadro_12_elementos", label: "Cuadro eléctrico 12 elementos (reforzado)" }
//                                                              -> usa el precio del componente pero
//                                                                 muestra un nombre distinto en la ficha
//
// El resultado de resolverOpcion() es exactamente lo que antes se escribía
// a mano: { nombre, destacada, items: [[nombre, precio], ...], total }.

const catalogo = require("./pricing-catalog.json");

const componentesPorId = new Map(catalogo.componentes.map((c) => [c.id, c]));

function getComponente(id) {
  const c = componentesPorId.get(id);
  if (!c) {
    throw new Error(`pricing.js: componente "${id}" no existe en pricing-catalog.json`);
  }
  return c;
}

// Resuelve una línea a [nombreMostrado, precioLinea]
function resolverLinea(linea) {
  const comp = getComponente(linea.ref);
  const nombre = linea.label || comp.nombre;

  if (linea.precioOverride != null) {
    // Caso puntual: la ficha original fusiona dos componentes en una sola
    // línea visible (p.ej. "Sensor de lluvia y de humedad de suelo" como
    // único ítem). "ref" solo sirve aquí para dejar constancia de qué
    // componente principal se está mostrando; el precio final es la suma
    // manual de ambos conceptos.
    return [nombre, linea.precioOverride];
  }

  if (linea.horas != null) {
    // Mano de obra simple: precio/hora × horas
    const precio = Math.round(comp.precio * linea.horas);
    return [nombre, precio];
  }

  if (linea.horasPrimera != null) {
    // Dispositivo instalado en volumen: 1ª unidad a horas completas,
    // resto de unidades a horas reducidas (regla de volumen del catálogo).
    const horasRefComp = getComponente(linea.horasRef);
    const cantidad = linea.cantidad || 1;
    const costeUnidad = comp.precio;
    const horasAdicional = linea.horasAdicional != null ? linea.horasAdicional : linea.horasPrimera;
    let precio = costeUnidad + horasRefComp.precio * linea.horasPrimera;
    if (cantidad > 1) {
      precio += (cantidad - 1) * (costeUnidad + horasRefComp.precio * horasAdicional);
    }
    return [nombre, Math.round(precio)];
  }

  // Material/dispositivo/trámite simple, con cantidad opcional (por defecto 1)
  const cantidad = linea.cantidad || 1;
  return [nombre, Math.round(comp.precio * cantidad)];
}

// Resuelve una opción completa: { nombre, destacada, lineas: [...] } ->
// { nombre, destacada, items: [...], total }
// Compatibilidad: si la opción ya viene en el formato antiguo (items/total
// escritos a mano, sin "lineas"), se devuelve tal cual — permite migrar
// data/services.js servicio a servicio sin romper los que aún no se han
// migrado al catálogo de componentes.
function resolverOpcion(opcion) {
  if (!opcion.lineas) {
    return opcion;
  }
  const items = opcion.lineas.map(resolverLinea);
  const total = items.reduce((sum, [, precio]) => sum + precio, 0);
  const resultado = {
    nombre: opcion.nombre,
    destacada: !!opcion.destacada,
    items,
    total
  };
  if (opcion.totalUnidad) resultado.totalUnidad = opcion.totalUnidad;
  return resultado;
}

// Resuelve todas las opciones de un array (uso típico: service.ejemplo.opciones)
function resolverOpciones(opciones) {
  return opciones.map(resolverOpcion);
}

// Recorre un servicio completo y resuelve .ejemplo.opciones y
// .ejemplosAdicionales[].opciones en el sitio, dejando el resto del objeto
// intacto. Devuelve un objeto nuevo (no muta el original) para que
// data/services.js pueda seguir siendo la fuente de datos "cruda".
function resolverServicio(service) {
  const resuelto = { ...service };
  if (resuelto.ejemplo && resuelto.ejemplo.opciones) {
    resuelto.ejemplo = { ...resuelto.ejemplo, opciones: resolverOpciones(resuelto.ejemplo.opciones) };
  }
  if (resuelto.ejemplosAdicionales) {
    resuelto.ejemplosAdicionales = resuelto.ejemplosAdicionales.map((ej) =>
      ej.opciones ? { ...ej, opciones: resolverOpciones(ej.opciones) } : ej
    );
  }
  return resuelto;
}

function resolverServicios(services) {
  return services.map(resolverServicio);
}

module.exports = {
  catalogo,
  getComponente,
  resolverLinea,
  resolverOpcion,
  resolverOpciones,
  resolverServicio,
  resolverServicios
};

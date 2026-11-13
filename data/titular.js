// Datos identificativos del titular de la web (aviso legal y política de
// privacidad). Es el ÚNICO sitio donde hay que rellenarlos.
//
// Cuando los tres campos obligatorios estén completos, el aviso legal y la
// política de privacidad muestran automáticamente la identificación completa
// (LSSI-CE art. 10 y RGPD art. 13) y desaparece el aviso de "datos pendientes".
// Mientras falte alguno, el servidor lo avisa en la consola al arrancar.
//
// Rellena los datos reales del alta de autónomo (o de la sociedad). No inventes
// ni "completes" nada: tienen que coincidir con el alta en Hacienda.
// Revisa el texto final de las páginas legales con tu gestor o asesor.

module.exports = {
  // Nombre y apellidos tal y como figuran en el DNI/NIE (o razón social).
  nombreCompleto: "",
  // NIF/NIE del autónomo (o CIF de la sociedad).
  nif: "",
  // Domicilio profesional o fiscal: calle, número, código postal y localidad.
  domicilio: ""
};

module.exports.CAMPOS_OBLIGATORIOS = ["nombreCompleto", "nif", "domicilio"];

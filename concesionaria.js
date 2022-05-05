let autos = require("./autos.js");    // no hace falta .js

let concesionaria = {
  autos,

  buscarAuto: unaPatente => {
    /* DESTRUCTURING [autoEncontrado] para asignarlo al array que me devuelve .filter
    y guardarlo como un elemento y no como un Array */
    let [autoEncontrado] = autos.filter((unAuto) => {
      return unAuto.patente === unaPatente;
    });
    return autoEncontrado !== undefined ? match : null;
  },

  venderAuto: function (unaPatente) {
    let autoVendido = this.buscarAuto(unaPatente);
    return (autoVendido.vendido = true);
  },

  autosParaLaVenta: () => {
    return (autosNoVendidos = autos.filter((unAuto) => !unAuto.vendido));
  },

  autosNuevos: function () {
    let autoOkm = this.autosParaLaVenta().filter((unAuto) => {
      return unAuto.km < 100;
    });
    return autoOkm;
  },

  listaDeVentas: () => {
    let autosVendidos = autos.filter((unAuto) => unAuto.vendido);
    return autosVendidos.map(function (unAuto) {
      return unAuto.precio;
    });
  },

  totalDeVentas: function () {
    return total = this.listaDeVentas().reduce((prev, current) => {  // Puedo "omitir total ="
      return prev + current;
    }, 0); // defino el valor inicial en 0
  },

  puedeComprar: (unAuto, unaPersona) => {
    return unaPersona.capacidadDePagoTotal >= unAuto.precio &&
      unaPersona.capacidadDePagoEnCuotas >= unAuto.precio / unAuto.cuotas;
  },

  autosQuePuedeComprar: function (unaPersona) {
    return autosParaVos = this.autosParaLaVenta().filter((unAuto) => {
      return this.puedeComprar(unAuto, unaPersona);
    });
  },
}


let unaPersona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 10000,
  capacidadDePagoTotal: 100000000,
};

// console.log(concesionaria.puedeComprar(autos[1],unaPersona));
// console.log(concesionaria.autosQuePuedeComprar(unaPersona));
// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.buscarAuto("JA123"));
// console.log(concesionaria.venderAuto('APL123'));
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());








/* ======================================================
  REFACTORIZAR: CONDICIONAL TERNARIO 
    if (autosFiltered){
        return autosFiltered[0];
    } else {
        return null
    };

----> SE TRANSFORMA EN: 
  return autosFiltered !== undefined? autosFiltered : null

======================================================

// DESTRUCTURING
const myArray2 = [5, 7, 'ten'];
const [uno, , tres] = myArray2;
console.log(tres); //  'ten'

*/

const os = require('./modulos/os');

const funcion= require('./modulos/funciones')

console.table(os.datosFrecuencia.slice(0,1).map((registro) => registro.times));
console.log("sistema operativo",os.sistemaOperativo);
console.log("ram dsiponible",os.memoriaDisponible);
console.log("ram en gb",funcion.memoriaDisponible(os.memoriaDisponible),"gb");
console.log("ttal de ram",os.memoriaRam,"bits");
console.log("ram en gb",funcion.totalmemr(os.memoriaRam),"gb");
const os = require('os');



const variableos={
    sistemaOperativo:os.type(),
    memoriaRam:os.totalmem(),
    memoriaDisponible:os.freemem(),
    datosFrecuencia:os.cpus()
}

module.exports=variableos;


console.log(os.freemem());

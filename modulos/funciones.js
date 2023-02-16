const { totalmem } = require("os");

let memoriaDisponible=freemem=>{
    let byteagb=1e-9*freemem;
    return byteagb;
}

let totalmemr=totalmem=>{
    let byteagb=1e-9*totalmem;
    return byteagb ;

}


const conversiones={
    memoriaDisponible,
    totalmemr
}

module.exports=conversiones;

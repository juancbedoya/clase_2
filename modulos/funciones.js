const { totalmem } = require("os");

let memoriaDisponible=freemem=>{
    let bitagb= 0.000000000125*freemem;
    let decimal=bitagb.toFixed(7);

    return parseFloat(decimal);
}

let totalmemr=totalmem=>{
    let bitagb= 0.000000000125*totalmem;
    let decimal=bitagb.toFixed(8);

    return parseFloat(decimal);

}


const conversiones={
    memoriaDisponible,
    totalmemr
}

module.exports=conversiones;

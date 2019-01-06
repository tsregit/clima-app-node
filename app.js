const { argv } = require('./config/yargs');
const { getLogarLatLng } = require('./lugar/lugar');
const { getClima } = require('./ clima/clima');

let getInformacion = async(direccion) => {
    try {
        let coors = await getLogarLatLng(direccion);
        let clima = await getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${clima.temp}`;
    } catch (error) {
        return `No se pudo determina el clima en ${direccion}`;
    }
};

getInformacion(argv.direccion).then(resp => console.log(resp)).catch(e => console.log(e));
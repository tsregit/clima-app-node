const axios = require('axios');

const getLogarLatLng = async direccion => {
    let encodeUrl = encodeURI(direccion);
    // espera que esta peticion regrese(await)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAw6eehA9y6Er0vMNM_Waj_9A_aIslpub4`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let results = resp.data.results[0];
    let coor = results.geometry.location;

    return {
        direccion: results.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
};

module.exports = {
    getLogarLatLng
}
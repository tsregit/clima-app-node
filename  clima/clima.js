const axios = require('axios');

const getClima = async(lat, lng) => {
    let encodeLatitud = encodeURI(lat);
    let encodeLongitud = encodeURI(lng);
    // espera que esta peticion regrese(await)
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${encodeLatitud}&lon=${encodeLongitud}&units=metric&appid=88313b6e425625363f479d7412e091b8`);
    let result = resp.data.list[0];
    let temperature = result.main;

    return temperature;
};

module.exports = {
    getClima
}
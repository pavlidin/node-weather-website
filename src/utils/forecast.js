const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c3418dbe7396afb5763a421be68dd689&query=${lon},${lat}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!");
    } else if (body.error) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, body.current.weather_descriptions[0] +  '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
    }
  });
};

module.exports = forecast;

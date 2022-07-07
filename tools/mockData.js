

const weather = [
  {"coord":{"lon":-0.1257,"lat":51.5085},
  "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
  "base":"stations",
  "main":{"temp":292.85,"feels_like":292.76,"temp_min":290.1,"temp_max":295.75,"pressure":1012,"humidity":72},
  "visibility":10000,"wind":{"speed":3.6,"deg":200},
  "clouds":{"all":75},
  "dt":1656506533,
  "sys":{"type":2,"id":2019646,"country":"GB","sunrise":1656474369,"sunset":1656534088},
  "timezone":3600,
  "id":2643743,
  "name":"London",
  "cod":200},

  {"coord":{"lon":-82.9988,"lat":39.9612},
  "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
  "base":"stations",
  "main":{"temp":292.52,"feels_like":292.24,"temp_min":289.34,"temp_max":295.59,"pressure":1023,"humidity":66},
  "visibility":10000,
  "wind":{"speed":2.06,"deg":270},
  "clouds":{"all":0},"dt":1656506809,
  "sys":{"type":2,"id":19839,"country":"US","sunrise":1656497160,"sunset":1656551081},
  "timezone":-14400,
  "id":4509177,
  "name":"Columbus",
  "cod":200},

  {"coord":{"lon":-104.9847,"lat":39.7392},
  "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
  "base":"stations",
  "main":{"temp":293.87,"feels_like":292.99,"temp_min":291.14,"temp_max":297.29,"pressure":1014,"humidity":38},
  "visibility":10000,
  "wind":{"speed":0.45,"deg":210},
  "clouds":{"all":94},
  "dt":1656506878,
  "sys":{"type":2,"id":2004616,"country":"US","sunrise":1656502481,"sunset":1656556315},
  "timezone":-21600,
  "id":5419384,
  "name":"Denver",
  "cod":200},

  {"coord":{"lon":-104.9847,"lat":39.7392},
  "weather":[],
  "base":"stations",
  "main":{"temp":293.87,"feels_like":292.99,"temp_min":291.14,"temp_max":297.29,"pressure":1014,"humidity":38},
  "visibility":10000,
  "wind":{"speed":0.45,"deg":210},
  "clouds":{"all":94},
  "dt":1656506878,
  "sys":{"type":2,"id":2004616,"country":"US","sunrise":1656502481,"sunset":1656556315},
  "timezone":-21600,
  "id":5419384,
  "name":"Sample",
  "cod":200}
]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {

  weather
};

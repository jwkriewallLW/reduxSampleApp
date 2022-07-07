//     private int cityId;
//     private String cityName;
//     private String countryAbbr;
//     private double lon;
//     private double lat;
//     private String weather;

// export class weatherModel {
//     constructor(cityId, cityName, countryAbbr, lon, lat, weather){
//         this.cityId = cityId;
//         this.cityName = cityName;
//         this.countryAbbr = countryAbbr;
//         this.lon = lon;
//         this.lat = lat;
//         this.weather = weather;
//     }
// }

interface weatherModel2 {
    cityId: Number,
    cityName: String,
    countryAbbr: String,
    lon: Number,
    lat: Number,
    weather: String
}

export default weatherModel2;
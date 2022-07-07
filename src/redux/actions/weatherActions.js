import axios from 'axios';
import * as types from './weatherTypes';

const catFactApi = 'https://catfact.ninja/fact'
const getLocalWeatherApi = 'http://localhost:3001/weather'
const getJavaWeatherApi = 'http://localhost:8080/allweather'
const addWeatherApi = 'http://localhost:8080/addweather'

export const fetchCatFact = () => {
    return (dispatch) => {
        return axios.get(catFactApi)
        .then(response => {
            dispatch(newCatFact(response.data.fact));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getAllWeatherData = () => {
    debugger;
    return (dispatch) => {
        return axios.get(getLocalWeatherApi)
        .then(response => {
            dispatch(getWeather(response.data));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getIntellijApi = () => {
    debugger;
    return (dispatch) => {
        return axios.get(getJavaWeatherApi)
        .then(response => {
            dispatch(getIntellijApiData(response.data));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const addWeather = (weather) => {
    debugger;
    return (dispatch) => {
        return axios.post(addWeatherApi, weather)
        .then(response => {
            console.log(response)
            dispatch(addNewWeather(weather));
            
            //dispatch(getIntellijApi())
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

// export const getIntellijApi = () => {
//     debugger;
//     return (dispatch) => {
//         return axios.get('http://localhost:8080/api')
//         .then(response => {
//             dispatch(getIntellijApiData(response.data));
//         })
//         // .catch(error => {
//         //     const errorMessage = error.message
//         // })
//     }
// }

export function getIntellijApiData(response){
    return {type: types.INTELLIJ_API, response}
}

export function getWeather(weather){
    return {type: types.ALL_WEATHER, weather}
}

export function newCatFact(weather){
    return {type: types.NEW_CAT_FACT, weather};
}

export function addNewWeather(weather){
    return { type: types.ADD_WEATHER, weather}
}
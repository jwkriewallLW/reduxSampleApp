import axios from 'axios';
import * as types from './weatherTypes';

export const fetchCatFact = () => {
    return (dispatch) => {
        return axios.get('https://catfact.ninja/fact')
        .then(response => {
            dispatch(newCatFact(response.data.fact));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getAllWeatherData = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/weather')
        .then(response => {
            dispatch(getWeather(response.data));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}



export function getWeather(weather){
    return {type: types.ALL_WEATHER, weather}
}

export function newCatFact(weather){
    return {type: types.NEW_CAT_FACT, weather};
}
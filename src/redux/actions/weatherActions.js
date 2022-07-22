import axios from 'axios';
import * as types from './weatherTypes';

const CAT_FACT_API = 'https://catfact.ninja/fact'
const GET_LOCAL_WEATHER_API = 'http://localhost:3001/weather'
const GET_JAVA_WEATHER_API = 'http://localhost:8080/allweather'
const ADD_WEATHER_API = 'http://localhost:8080/addweather'
const DELETE_WEATHER_API = 'http://localhost:8080/weather/'
const GET_SINGLE_WEATHER_API = 'http://localhost:8080/getweather/'
const UPDATE_SINGLE_WEATHER_API = 'http://localhost:8080/updateweather/'
const GET_TOP_TEN_API ='http://localhost:8080/weatherlimit10'

export const fetchCatFact = () => {
    return (dispatch) => {
        return axios.get(CAT_FACT_API)
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
        return axios.get(GET_LOCAL_WEATHER_API)
        .then(response => {
            dispatch(getWeather(response.data));
        })

        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getIntellijApi = () => {
    
    return (dispatch) => {
        return axios.get(GET_JAVA_WEATHER_API)
        .then(response => {
            dispatch(getIntellijApiData(response.data));
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const addWeather = (weather) => {
    
    return (dispatch) => {
        return axios.post(ADD_WEATHER_API, weather)
        .then(response => {
            console.log(response)
            dispatch(addNewWeather());
            
            //dispatch(getIntellijApi())
        })
        .catch(error => {
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }
}

export const deleteOneWeather = (id) => {
    
    return (dispatch) => {
        return axios.delete(`${DELETE_WEATHER_API}${id}`)
        .then(response => {
            console.log(response)
            dispatch(deleteWeather());
            dispatch(getIntellijApi());
            
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getOneWeather = (id) => {
    
    return (dispatch) => {
        return axios.get(`${GET_SINGLE_WEATHER_API}${id}`)
        .then(response => {
            console.log(response)
            dispatch(getSingleWeather(response.data));
            
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const updateSingleWeather = (weather, id) => {
    
    return (dispatch) => {
        return axios.put(`${UPDATE_SINGLE_WEATHER_API}${id}`, weather)
        .then(response => {
            console.log(response)
            dispatch(updateWeather());   
        })
        // .catch(error => {
        //     const errorMessage = error.message
        // })
    }
}

export const getTopTenWeather = () => {
    debugger;
    
    return (dispatch) => {
        console.log(dispatch);
        return axios.get(GET_TOP_TEN_API)
        .then(response => {
            console.log(response)
            dispatch(getTopTen(response.data));
            // successful -> additional type
        })
        // error -> additional type
        // no data -> additional type
    }
}

export function getIntellijApiData(response){
    return {type: types.INTELLIJ_API, response}
}

export function getWeather(weather){
    return {type: types.ALL_WEATHER, weather}
}

export function newCatFact(weather){
    return {type: types.NEW_CAT_FACT, weather};
}

export function addNewWeather(){
    return { type: types.ADD_WEATHER }
}

export function deleteWeather(){
    return { type: types.DELETE_WEATHER };
}

export function updateWeather() {
    return { type: types.UPDATE_WEATHER }
}

export function getSingleWeather(weather) {
    return { type: types.GET_SINGLE_WEATHER, payload: weather }
}

export function getTopTen(payload) {
    return { type: types.GET_TOP_TEN_WEATHER, payload }
    // variables named here (payload) directly correspond to what the reducer can access. If it's called payload here, 
    // Reducer will have to access payload to display.
}
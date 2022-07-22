import * as types from "../actions/weatherTypes";
import initialStateWeather from "./initialStateWeather";

export default function weatherReducer(state=initialStateWeather, action){
    
    switch(action.type){
        case types.NEW_CAT_FACT: 
            return {
                ...state, weather: action.weather
            };
       
        case types.ALL_WEATHER:
            
            return{
                ...state, allWeather:action.weather
            };

        case types.INTELLIJ_API:
            return {
                ...state, intellij:action.response
            };
        
        case types.ADD_WEATHER:
            return {
                ...this.state //, intellij:action.response
            };

        case types.DELETE_WEATHER:
            return {
                ...state
            };

        case types.GET_SINGLE_WEATHER:
            return {
                ...state, weather:action.payload
            };

        case types.UPDATE_WEATHER: 
            return {
                ...state
            }
        
        case types.GET_TOP_TEN_WEATHER:
            debugger;
            return {
                ...state, topten:action.payload
            }

        default: 
            return state;

    }
}


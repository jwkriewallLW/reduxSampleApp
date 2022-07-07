import initialState from "./initialState";
import * as types from "../actions/weatherTypes";

export default function weatherReducer(state=initialState, action){
    
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
            }
        default: 
            return state;

    }
}


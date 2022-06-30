import initialState from "./initialState";
import * as types from "../actions/weatherTypes";

export default function weatherReducer(state=initialState, action){
    
    switch(action.type){
        case types.NEW_CAT_FACT: 
            return {
                ...state, weather: action.weather
            };
       
        case types.ALL_WEATHER:
            debugger;
            
            return{
                ...state, allWeather:action.weather
            };
        default: 
            return state;

    }
}


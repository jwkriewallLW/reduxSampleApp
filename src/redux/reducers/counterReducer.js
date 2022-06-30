import * as types from "../actions/counterTypes";
import initialState from "./initialState";



export default function counterReducer(state = initialState, action){
    switch(action.type){
        case types.PLUS_ONE:
            return{
                ...state,
                count: state.count + 1
            }
            
        case types.MINUS_ONE:     
            return{
                ...state,
                count: state.count -  1
            }

        default: return state;
    }
    
}
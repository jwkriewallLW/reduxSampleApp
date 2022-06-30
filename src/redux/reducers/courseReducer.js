import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState, action){
    switch(action.type){
        case types.CREATE_COURSE_SUCCESS:
            return  {
                ...state,
                courses: [...state.courses, { ...action.course }]
            }; 
        case types.DELETE_COURSE:
            return state.filter(course => course.type == action.type)
            //return state.filter(course => course.title == course.title)
        case types.DELETE_SINGLE_COURSE: 
            //console.log(state.filter(course => course.title !== action.course) );
            return [...state.filter(course => course.title !== action.course)];
            
            // Above code works, but below doesn't... why?
            //return [...state.filter(course => course.title !== action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.courses
            };
        case types.UPDATE_COURSE_SUCCESS:
            return state.map(course => course.id === action.course.id ? action.course : course);
        default:
            return state;
    }
}

// Whatever is returned from the reducer becomes the new state.
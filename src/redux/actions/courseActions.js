import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"
import { beginApiCall } from "./apiStatusActions";

    /////////////////////////////////////////
    //           ACTION CREATORS           //
    /////////////////////////////////////////

export function deleteCourse(course) {
    return { type: types.DELETE_COURSE, course };
}

export function deleteSingleCourse(course) {
    return { type: types.DELETE_SINGLE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

    /////////////////////////////////////////
    //               THUNKS                //
    /////////////////////////////////////////

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw error;
        })
    }
}

export function saveCourse(course) {
    return function (dispatch) {
        dispatch(beginApiCall()) 
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id 
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
        })
        .catch(error => {
            throw error;
        });
    };
}
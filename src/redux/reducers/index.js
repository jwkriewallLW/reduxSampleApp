import { combineReducers } from 'redux';
// import courses from './courseReducer';
import counter from './counterReducer';
// import authors from './authorReducer';
// import apiCallsInProgress from "./apiStatusReducer";
import weather from './weatherReducer'

const rootReducer = combineReducers ({
    counter: counter,
    weather
    //This seems to duplicate the state?
});

export default rootReducer;
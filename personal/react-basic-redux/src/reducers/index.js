import countReducer from './counterReducer';
import recodeReducer from './recodeReducer';
import {combineReducers} from "redux";



export default combineReducers({
    countReducer,
    recodeReducer
})
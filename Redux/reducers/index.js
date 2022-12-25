import {combineReducers} from "redux";
import authreducers from "./auth";
import currentUserreducer from "./currentuser"

export default combineReducers({
    authreducers,currentUserreducer
})
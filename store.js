import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Reducers from "./Redux/reducers";

const Middlewares = [thunk];

export default createStore(Reducers,applyMiddleware(...Middlewares))
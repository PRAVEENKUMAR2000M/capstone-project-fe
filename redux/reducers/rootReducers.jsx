import { combineReducers } from "redux";
import candidateReducer from "./candidateReducers";
import createqueryReducer from "../createqueryReducer";
import queryReducer from "./queryReducer";



const rootReducer = combineReducers({
    candidate: candidateReducer,
    createQuery: createqueryReducer,
    savequery: queryReducer,
})

export default rootReducer
import { combineReducers } from "redux";
import candidateReducer from "./candidateReducers";
import createqueryReducer from "../CreateQueryReducer";
import queryReducer from "./queryReducer";
import statusReducer from "./statusReducer";




const rootReducer = combineReducers({
    candidate: candidateReducer,
    createQuery: createqueryReducer,
    savequery: queryReducer,
    status: statusReducer
})

export default rootReducer
import { combineReducers } from "redux";
import candidateReducer from "./candidateReducers";
import createqueryReducer from "../CreateQueryReducer";



const rootReducer = combineReducers({
    candidate: candidateReducer,
    createQuery: createqueryReducer
})

export default rootReducer
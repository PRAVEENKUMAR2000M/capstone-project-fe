
const initialState = {
    category: [],
    preferedVoiceCommunication: [],
    QueryTitle: [],
    QueryDescription: [],
    SubCategory: [],
    candidate: []
}

const createqueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, category: action.payload }
        case "SET_PREFEREDVOICECOMMUNICATION":
            return { ...state, preferedVoiceCommunication: action.payload }
        case 'SET_QUERYTITLE':
            return { ...state, QueryTitle: action.payload }
        case 'SET_QUERYDESCRIPTION':
            return { ...state, QueryDescription: action.payload }
        case 'SET_SUBCATEGORY':
            return { ...state, SubCategory: action, payload}
        case 'SET_CANDIDATE':
            return { ...state, candidate: action.payload }
        default:
            return state
    }
}

export default createqueryReducer
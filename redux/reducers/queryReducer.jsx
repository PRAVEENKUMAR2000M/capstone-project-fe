

const initialState = {
    savequery: []
}

const queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SAVEQUERY':
            return { ...state, savequery: action.payload }
        default:
            return state
    }
}

export default queryReducer


const initialState = {
    candidate: []
}

const candidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CANDIDATE':
            return { ...state, candidate: action.payload }
        case 'UNSET_CANDIDATE':
            return { candidate: null }
        default:
            return state
    }
}

export default candidateReducer;
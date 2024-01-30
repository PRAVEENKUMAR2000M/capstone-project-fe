const initialState = {
    status: []
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return { ...state, status: action.payload }
        default: 
            return state
    }
}

export default statusReducer
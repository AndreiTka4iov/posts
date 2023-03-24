const defaultState = {
    input: '',
}

export const searchReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SET_VALUE":
            return {...state, input: action.payload}
        case "CLEAR_VALUE":
            return {...state, input: ''}
        default: 
            return state
    }
} 
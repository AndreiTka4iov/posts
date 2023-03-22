const defaultState = {
    dark: false,
}

export const modeReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SET_DARK":
            return {...state, dark: true}
        case "SET_LIGHT":
            return {...state, dark: false}
        default: 
            return state
    }
} 
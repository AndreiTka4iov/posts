const defaultState = {
    loader: false,
}

export const loaderReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SHOW_LOADER":
            return {...state, loader: true}
        case "HIDE_LOADER":
            return {...state, loader: false}
        default: 
            return state
    }
} 
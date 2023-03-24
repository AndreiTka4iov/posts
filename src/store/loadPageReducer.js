const defaultState = {
    load: false,
}

export const loadPageReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SET_LOAD":
            return {...state, load: true}
        default: 
            return state
    }
} 
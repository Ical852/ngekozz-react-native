const initGlobalState = {
    fav: []
}

export const globalReducer = (state = initGlobalState, action) => {
    if (action.type === 'SET_FAV') {
        return {
            ...state,
            fav: action.value
        }
    }
    return state
}
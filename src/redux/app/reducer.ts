import types from './types'

let initialState = {
    isLoading: false,
    error: null
}

export const appReducer = (state = initialState, action: any) => {

    switch(action.type){
        case types.SET_LOADING: {  
            return {
                ...state,
                isLoading: true
            }
        }
        case types.REMOVE_LOADING: {  
            return {
                ...state,
                isLoading: false
            }
        }
        case types.REMOVE_LOADING: {  
            return {
                ...state,
                error: false
            }
        }
        default:
            return state
    }
}
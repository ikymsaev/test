import types from './types'

export interface usersTypes {
    email: string,
    firstName: string,
    id: number,
    lastName: string,
    message: string,
    phone: string,
    timestamp: string
}

let initialState: usersTypes[] | null = null

export const usersReducer = (state = initialState, action: any) => {

    switch(action.type){
        case types.SET_USERS: {  
            return action.payload
        }
        default:
            return state
    }
}
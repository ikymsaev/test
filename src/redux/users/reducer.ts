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

let initialState: usersTypes[] = []

export const usersReducer = (state = initialState, action: any) => {

    switch(action.type){
        case types.SET_USERS: {
            action.payload.forEach((el: any) => {
                el.date = new Date(el.timestamp).toLocaleDateString()
                const reg = /\d+/g
                el.timestamp = el.timestamp.match( reg ).join([])
            });
            return action.payload
        }
        case types.SORT_USERS: {
            if(action.payload === 'ASC'){
                const sorted = state.sort(
                    (a: any, b: any) => b.timestamp - a.timestamp
                )
                return sorted
            } else if (action.payload === 'DESC'){
                const sorted = state.sort(
                    (a: any, b: any) => a.timestamp - b.timestamp
                )
                return sorted
            }else{
                return state
            }
        }
        default:
            return state
    }
}
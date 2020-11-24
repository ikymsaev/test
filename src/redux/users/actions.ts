import Api from '../../api/api'
import types from './types'
import {setLoading, removeLoading, showError} from '../app/actions'

const setUsers = (users: any) => ({
    type: types.SET_USERS,
    payload: users
})
const setSortedUsers = (order: string) => ({
    type: types.SORT_USERS,
    payload: order
})

export const getUsers = (count: number) => {
    return (dispatch: any) => {
        dispatch(setLoading())
        Api.getUsers(count)
            .then( res => {
                if(res.data){
                    dispatch(setUsers(res))
                    dispatch(removeLoading())
                } else {
                    dispatch(showError('Ошибка сервера'))
                }
            })
    }
}
export const sortUsers = (order: string) => {
    return (dispatch: any) => {
        dispatch(setLoading())
        dispatch(setSortedUsers(order))
        dispatch(removeLoading())
    }
}

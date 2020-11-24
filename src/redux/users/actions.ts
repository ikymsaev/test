import Api from '../../api/api'
import types from './types'
import {setLoading, removeLoading } from '../app/actions'

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
                dispatch(setUsers(res))
                dispatch(removeLoading())
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

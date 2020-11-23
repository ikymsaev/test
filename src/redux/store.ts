import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { usersReducer } from './users/reducer'
import { appReducer } from './app/reducer'


let reducers = combineReducers({
    users: usersReducer,
    app: appReducer
})


let store = createStore(
    reducers, applyMiddleware(thunk)
)

export default store
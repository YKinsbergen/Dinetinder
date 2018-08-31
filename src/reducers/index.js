//reducers/index.js
import { combineReducers } from 'redux'
import userReducer from './reducer'
import messageReducer from './messageReducer'
import profileReducer from './profile'

export default combineReducers({
    userReducer,
    messageReducer,
    profileReducer
})

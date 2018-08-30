//reducers/index.js
import { combineReducers } from 'redux'
import userReducer from './reducer'
import messageReducer from './messageReducer'

export default combineReducers({
    userReducer,
    messageReducer
})

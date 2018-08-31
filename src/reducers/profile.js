//reducers/profile.js
import { ADD_PROFILE } from '../actions/profile'

export default (state = [], action = {}) => {
    switch (action.type) {
      case ADD_PROFILE:
        return state.concat({...action.payload})
    default:
      return state
    }
  }


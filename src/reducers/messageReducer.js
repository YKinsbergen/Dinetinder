//reducers/messageReducer.js
import { ADD_MESSAGE } from "../actions/message";

export default (state = [], action = {}) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return state.concat({...action.payload})
    default:
      return state
    }
  }


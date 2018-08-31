//reducers/messageReducer.js
import { DELETE_DINNER } from "../actions/message";

export default (state = [], action = {}) => {
    switch (action.type) {
      case DELETE_DINNER:
        return state.filter(dinners => dinners.id !== dinner.id )
    default:
      return state
    }
  }

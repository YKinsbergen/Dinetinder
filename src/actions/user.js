//actions/user.js
export const ADD_USER = 'ADD_USER'
export const DELETE_DINNER = 'DELETE_DINNER'

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: {
            ...user
        }
    }
}

export function deleteDinner(dinner) {
    return {
        type: DELETE_DINNER,
        payload: dinner
    }
}

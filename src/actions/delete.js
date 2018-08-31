//actions/message.js
export const DELETE_DINNER = 'ADDDELETE_DINNER_MESSAGE'

export function deleteDinner(dinner) {
    return {
        type: DELETE_DINNER,
        payload: {
            ...dinner
        }
    }
}

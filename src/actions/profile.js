//actions/profile.js
export const ADD_PROFILE = 'ADD_PROFILE'

export function addProfile(profile) {
    return {
        type: ADD_PROFILE,
        payload: {
            ...profile
        }
    }
}
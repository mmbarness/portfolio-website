import {GET_EXP, SET_LOADING} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_EXP:
            return {
                ...state,
                experience: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

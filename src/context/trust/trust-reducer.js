import {GET_TRUST, SET_LOADING} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TRUST:
      return {
        ...state,
        trust: action.payload,
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

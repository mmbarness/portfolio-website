import React, {useReducer} from 'react'
import TrustContext from './trust-context'
import TestimonialsReducer from './trust-reducer'
import {GET_TRUST, SET_LOADING} from '../types'

const TrustState = props => {
  const initialState = {
    trust: {},
    loading: false
  }

  const [state, dispatch] = useReducer(TestimonialsReducer, initialState)

  const getTrust = async () => {
    dispatch({type: SET_LOADING})
    const res = await fetch('/assets/data/trust.json')
    if (res) {
      const data = await res.json()
      dispatch({
        type: GET_TRUST,
        payload: data
      })
    }
  }

  return <TrustContext.Provider
    value={{
      trust: state.trust,
      loading: state.loading,
      getTrust
    }}
  >
    {props.children}
  </TrustContext.Provider>
}

export default TrustState

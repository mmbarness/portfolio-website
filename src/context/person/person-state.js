import React, {useReducer} from 'react'
import PersonContext from './person-context'
import PeopleReducer from './person-reducer'
import {GET_PERSON, SET_LOADING} from '../types'

const PersonState = (props) => {
    const initialState = {
        person: {},
        loading: false
    }

    const [state, dispatch] = useReducer(PeopleReducer, initialState)

    const getPerson = async () => {
        dispatch({type: SET_LOADING})
        const resp = await fetch('/assets/data/person.json')
        if (resp.ok) {
            const person = await resp.json()
            dispatch({
                type: GET_PERSON,
                payload: person
            })
        }
    }

    return <PersonContext.Provider
        value={{
            person: state.person,
            loading: state.loading,
            getPerson
        }}
    >
        {props.children}
    </PersonContext.Provider>
}

export default PersonState

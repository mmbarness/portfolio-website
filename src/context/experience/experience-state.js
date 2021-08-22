import React, {useReducer} from 'react'
import ExperienceContext from './experience-context'
import ExperienceReducer from './experience-reducer'
import {GET_EXP, SET_LOADING} from '../types'

const ExperienceState = (props) => {
    const initialState = {
        person: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ExperienceReducer, initialState)

    const getExperience = async () => {
        dispatch({type: SET_LOADING})
        const resp = await fetch('/assets/data/experience.json')
        if (resp.ok) {
            const experience = await resp.json()
            dispatch({
                type: GET_EXP,
                payload: experience
            })
        }
    }

    return <ExperienceContext.Provider
        value={{
            experience: state.experience,
            loading: state.loading,
            getExperience
        }}
    >
        {props.children}
    </ExperienceContext.Provider>
}

export default ExperienceState

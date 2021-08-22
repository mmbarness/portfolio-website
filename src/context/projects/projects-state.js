import React, {useReducer} from 'react'
import {GET_PROJECTS, SET_LOADING} from '../types'
import ProjectsReducer from './projects-reducer'
import ProjectsContext from './projects-context'

const ProjectsState = (props) => {
  const initialState = {
    projects: {},
    loading: false
  }
  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

  const getProjects = async () => {
    dispatch({type: SET_LOADING})
    const resp = await fetch('/assets/data/projects.json')
    if (resp.ok) {
      const projects = await resp.json()
      dispatch({
        type: GET_PROJECTS,
        payload: projects
      })
    }
  }
  return (
    <ProjectsContext.Provider
      value={{
        projects: state.projects,
        loading: state.loading,
        getProjects
      }}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsState
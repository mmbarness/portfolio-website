import React from 'react'
import ProjectsState from '../../../context/projects/projects-state'
import ProjectList from './project-list/project-list'

const Projects = () => {
  return (
    <ProjectsState>

      <React.Fragment>
          <div className="project-list nav-height-padding">

              <div className="container">
                  <div className="row">
                      <div className="col-xl-6 col-lg-7 col-md-8">
                          <h1 className="mt-5">Well done is better than well said.</h1>
                      </div>
                  </div>
              </div>

              <ProjectList />

          </div>
      </React.Fragment>

    </ProjectsState>
  )
}

export default Projects

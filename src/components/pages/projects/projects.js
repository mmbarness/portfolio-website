import React from 'react'
import ProjectsState from '../../../context/projects/projects-state'
import SingleProject from '../single-project/single-project'
import ProjectList from './project-list/project-list'


const Projects = () => {
  return (
    <ProjectsState>

      <>
          <div className="project-list nav-height-padding">

              <div className="container">
                  <div className="row">
                      <div className="col-xl-6 col-lg-7 col-md-8">
                          <h1 className="mt-5">A bit of my work:</h1>
                      </div>
                  </div>
              </div>

              <ProjectList />
              {/* <SingleProject/> */}
          </div>
      </>

    </ProjectsState>
  )
}

export default Projects

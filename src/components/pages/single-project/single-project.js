import React from 'react'
import './single-project.scss'
import ProjectData from '../projects/projects-data.json' 

const SingleProject = (props) => {

    let projIdString = props.match.params.slug
    let regTest = /^\d+$/;
    let projId = parseInt(projIdString.split('').filter(ele => regTest.test(ele)))

    let project = ProjectData.filter(proj => proj.id === projId)[0];

    console.log(project);

    return (
            <div className="projects">
                <div className="project">

                    <div 
                         style={{background: `url(${project.pictureLinks.home})`, minHeight: '50vh'}}>
                    </div>

                    <div className="min-vh-100 d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h1>{project.tagLine}</h1>
                                </div>
                                <div className="col-lg-7">
                                    <h5 className="mb-2">Project description</h5>
                                    <p className="mb-4">
                                        {project.longDescription}</p>
                                    <h5 className="mb-2">Platforms:</h5>
                                    <p className="mb-4">Web</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mb-5 mb-lg-6 align-items-center">
                            <div className="col-lg-8 order-1 order-lg-0">
                                <img src={project.pictureLinks.secondPhoto} alt=""
                                     className="img-fluid"/>
                            </div>
                            <div className="col-lg-4 order-0 order-lg-1">
                                <h2>{project.partTwoTitle}</h2>
                                <p>{project.partTwoDescription}</p>
                            </div>
                        </div>

                        <div className="row mb-5 mb-lg-6 align-items-center">
                            <div className="col-lg-4">
                                <h2>{project.partThreeTitle}</h2>
                                <p>{project.partThreeDescription}</p>
                            </div>
                            <div className="col-lg-8">
                                <img src={project.pictureLinks.thirdPhoto} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    )
}

export default SingleProject

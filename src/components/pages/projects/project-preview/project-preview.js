import React from 'react'
import {Link} from 'react-router-dom'
import './project-preview.scss'

// interface project{
//     bgColorHex?: string
//     bgColorClass?: string
//     brand: string
//     category: string 
//     id: number
//     imgPreviewUrl: string 
//     linkToProject: string
//     pictureLinks: any 
//     projectDescription: string 
//     textColor: any 
//     title: any 
// }

// interface props{
//     project: project
// }

const ProjectPreview = (props) => {
    const project = props.project 
    const {
        brand,
        title,
        category,
        imgPreviewUrl,
        textColor,
        linkToProject
    } = project

    const link = () => (
        <Link to={linkToProject} className="project-preview mb-5 mb-md-7 block-link text-black pointer" state = {project}>
            <div className="container ">
                <div className={`row ${textColor ? textColor : 'text-body'}`}
                     style={{backgroundImage: `url(${imgPreviewUrl})`}}>
                </div>
            </div>
        </Link>
    )
    return(link())

}

export default ProjectPreview

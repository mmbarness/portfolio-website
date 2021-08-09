import React from 'react'
import {Link} from 'react-router-dom'
import './project-preview.scss'

const ProjectPreview = ({project}) => {
    const {
        brand,
        title,
        category,
        imgPreviewUrl,
        textColor,
        linkToProject
    } = project

    return (
        <Link className="project-preview mb-5 mb-md-7 block-link text-black pointer" to={linkToProject}>

            <div className="container ">
                <div className={`row ${textColor ? textColor : 'text-body'}`}
                     style={{backgroundImage: `url(${imgPreviewUrl})`}}>

                    <div className="col-md-6 p-5 project-preview__text">
                        <div className="brand-logo h5">
                            {brand}
                        </div>
                        <h2 className="ml-4">{title}</h2>
                        <div className="project-category">
                            {category}
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default ProjectPreview

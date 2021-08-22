import React, {useContext, useEffect} from 'react'
import ProjectsContext from '../../../../context/projects/projects-context'
import ProjectPreview from '../project-preview/project-preview'

const ProjectList = () => {

    const projectsContext = useContext(ProjectsContext)
    
    useEffect(() => {
        projectsContext.getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {projects, loading} = projectsContext

    // console.log(projects);

    if (loading) return <p className="text-center">Loading projects...</p>

    return (
        <>
            {projects.length && projects.map(project => <ProjectPreview key={project.id} project={project}/>)}
        </>
    )
}

export default ProjectList

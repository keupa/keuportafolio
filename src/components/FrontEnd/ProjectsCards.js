import React, { Fragment } from 'react'
import { projectsData } from './projectsData'

const getTags = projectsData.getTags

function ProjectsCards () {
    return(
        <div>
            {projectsData.map((project, index) => {
                return(
                    <Fragment key={index}>
                        <h2>{project.title}</h2>
                        <img src={project.imageUrl} alt={project.title} /> 
                        <p>{project.description}</p>
                        <a href={project.demoUrl}>Demo</a>
                        <a href={project.repositoryUrl}>Github Repository</a>
                        {project.tags.map((tag, index) =>{
                            return(
                            <p key={'tag' + index}>{tag}</p>
                            )
                        })}
                    </Fragment>
                    )
            })}
        </div>
    )
}

export default ProjectsCards 
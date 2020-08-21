import React, { Fragment } from 'react'
import { projectsData } from './projectsData'
import './frontEnd.css'

function ProjectsCards () {
    return(
        <div className='projects-cards-container'>
            {projectsData.map((project, index) => {
                return(
                    <div className='projects-cards' key={index}>
                        <h2 className='project-title'>{project.title}</h2>
                        <img src={project.imageUrl} alt={project.title} className='p-img'/> 
                        <p className='project-description'>{project.description}</p>
                        <a href={project.demoUrl} className='demolink'>Demo</a>
                        <a href={project.repositoryUrl} className='repolink'>Repository</a>
                        {project.tags.map((tag, index) =>{
                            return(
                                <p key={'tag' + index} className='tags'>{tag}</p>
                            )
                        })}
                    </div>
                    )
            })}
        </div>
    )
}

export default ProjectsCards 
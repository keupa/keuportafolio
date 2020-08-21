import React from 'react'
import ProjectsCards from './ProjectsCards'
import './frontEnd.css'

function FrontEnd() {
    return(
        <div className='front-end-container'>
            <h1 className='project-title'>PROJECTS</h1>
            <ProjectsCards /> 
        </div>
    )
}

export default FrontEnd
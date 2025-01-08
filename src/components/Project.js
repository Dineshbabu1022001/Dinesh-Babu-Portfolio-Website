import React from 'react'
import ProjectData from './ProjectData'
import { ProjectWrapper } from './ProjectWrapper'

export const Project = () => {
    const porjectdata=ProjectData.map(item=>(
        <ProjectWrapper
        key={item.id}
        {...item}
        />
    ))
  return (
    <div id="projects">
        <div className="project-page">
            <p className="project-heading">Things I've <span style={{color:"#74C0FC"}}>Built</span> </p>
        </div>
        <div className='project-details'>
        {porjectdata}
        </div>
    </div>

  )
}

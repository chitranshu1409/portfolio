import React from 'react';
import ProjectBox from './ProjectBox';
import ReferPortfolio from '../images/refer.png'
import roomsPortfolio from '../images/roomsPortfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={roomsPortfolio} projectName="Rooms" />
        <ProjectBox projectPhoto={ReferPortfolio} projectName="Refer" />
      </div>

    </div>
  )
}

export default Projects
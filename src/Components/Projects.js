import React from 'react';
import ProjectBox from './ProjectBox';

import roomsPortfolio from '../images/roomsPortfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={roomsPortfolio} projectName="Rooms" />
      </div>

    </div>
  )
}

export default Projects
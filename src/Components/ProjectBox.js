import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
    Rooms:"A comprehensive video calling application designed to enhance productivity for remote teams by integrating multiple communication tools into a single platform. The application supports voice chat, video calls, real-time text chat, and screen sharing, providing seamless collaboration for team members across various locations.",
    RoomsGithub:"https://github.com/chitranshu1409/room-frontend-latest",
    RoomsWebsite:"https://room-frontend-latest.vercel.app/",


    Refer: "A full stack 'Refer & Earn' website that allows users to refer others by simply entering their email addresses. The system then automatically sends a referral email to the provided addresses, making it easy and efficient for users to share and earn rewards.",
    ReferGithub:"https://github.com/chitranshu1409/Accredian-frontend-task",
    ReferWebsite:"https://accredian-frontend-task-sepia-nine.vercel.app/",
  }

 
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName ]}
            <br />

            <a  href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
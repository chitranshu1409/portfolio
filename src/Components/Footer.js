import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Chitranshu arya</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/chitranshu1409" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/chitranshu-arya-98562a248" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:chitranshu.arya9873@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/sahni1403/" target="_blank"><AiFillInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer
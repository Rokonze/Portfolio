import React from 'react'
import CV from '../assets/CV_Serban_Iulian.pdf'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Footer() {
  return (
    <div id='contact' className='w-[100%]'>
        <div className=" max-w-[80%] lg:max-w-[1200px] mt-6 rounded-full  mx-auto    text-[#f9f4e8]  py-6  shadow-xl items-center bg-gradient-to-b from-[#1f3c5c] to-[#314c6f]">
            
            <ul className="flex flex-row justify-center ">
                
                <a href="https://linkedin.com/in/iulian-serban-12ab3522b" target='_blank' rel="noopener noreferrer" className='text-3xl'>
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2  hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>
                        <FaLinkedin />
                    </li>
                </a>
                
                
                <a href="https://github.com/Rokonze" target='_blank' rel="noopener noreferrer" className='text-3xl'>
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2  hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>
                        <FaGithub />
                    </li>
                 </a>

                 <a href={CV} download>
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2 text-3xl  hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300 flex items-center'>
                        <FiDownload />
                        <p  className='text-xl px-2'>CV</p>
                    </li>
                 </a>
                
                 
            </ul>
        </div>
    </div>
  )
}

export default Footer
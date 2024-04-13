import React from 'react'
import github from '../assets/githubUserFinder.png'
import shoppingList from '../assets/shoppingList.png'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Projects() {
  return (
    <div id='projects' className='h-auto  max-w-[80%] lg:max-w-[1200px] text-[#1f3c5c] flex flex-col items-center rounded-3xl '>
        <h3 className="text-3xl font-extrabold p-6 mt-6">Projects</h3>
        <div className='flex flex-col content-center lg:flex-row justify-center items-center  py-6 my-6 border-solid '>
            
            <img src={github} alt="Github User Finder" className='my-auto w-[500px] h-auto  border-solid border-8 border-[#1f3c5c] mx-2 rounded-3xl' />
            
            
           
            <div className='flex flex-col lg:max-w-[40%] px-2 mx-2 items-center text-center'>
                <a href='https://github-user-finder-i.netlify.app/' target='_blank' rel="noopener noreferrer" className='text-3xl text-center font-extrabold  pt-8 hover:underline'>Github User Finder</a>
                <p className='py-4 '>Project done with the Github API. Allows you to find any Github user and see a detailed page about him/her.</p>
                <ul className='flex flex-wrap flex-row  justify-center'>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>HTML</p>    
                        <FaHtml5 className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>CSS</p>    
                        <FaCss3Alt className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>JS</p>    
                        <IoLogoJavascript className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>REACT</p>    
                        <FaReact className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>TAILWIND</p>    
                        <SiTailwindcss className='text-3xl'/>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col content-center lg:flex-row justify-center items-center  py-6 my-6 border-solid '>
            <img src={shoppingList} alt="Github User Finder" className='my-auto h-auto w-[500px] border-solid border-8 border-[#1f3c5c] mx-2 rounded-3xl' />
           
            <div className='flex flex-col lg:max-w-[40%] px-2 mx-2 items-center text-center'>
            <a href='https://steady-narwhal-78edfb.netlify.app/' target='_blank' rel="noopener noreferrer" className='text-3xl text-center font-extrabold  pt-8 hover:underline'>Shopping List</a>
                <p className='py-4'>Project similar to a ToDo List with vanilla JS and ability to add, remove and edit items stored in localStorage.</p>
                <ul className='flex flex-wrap flex-row  justify-center'>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>HTML</p>    
                        <FaHtml5 className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>CSS</p>    
                        <FaCss3Alt className='text-3xl'/>
                    </li>
                    <li className='p-2 m-2 flex flex-col items-center'>
                        <p>JS</p>    
                        <IoLogoJavascript className='text-3xl'/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Projects
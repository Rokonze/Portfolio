import React from 'react'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className='bg-gradient-to-b from-[#1f3c5c] to-[#314c6f] max-w-[80%] lg:max-w-[1200px] h-auto mx-auto text-[#f9f4e8] flex flex-col  items-center my-8 py-8 rounded-3xl divide-y'>
        <div className='w-[75%] md:w-[50%]  flex flex-col items-center py-8 '>
            <h3 className='text-3xl font-extrabold mb-8'>About me</h3>
            <p className='text-center text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eveniet adipisci tenetur esse dolorem, omnis necessitatibus nobis perferendis, eaque optio ut? Minus architecto eius iusto quisquam reiciendis quod natus eaque</p>
        </div>
        
        <div className='w-[80%] flex flex-col items-center py-8'>
            <h3 className='text-3xl font-extrabold mb-8'>Skills</h3>
            <ul className='flex flex-wrap flex-row  justify-center'>
                <li className='p-2 m-2 flex flex-col items-center'>
                    <p>HTML</p>    
                    <FaHtml5 className='text-6xl'/>
                </li>
                <li className='p-2 m-2 flex flex-col items-center'>
                    <p>CSS</p>    
                    <FaCss3Alt className='text-6xl'/>
                </li>
                <li className='p-2 m-2 flex flex-col items-center'>
                    <p>JS</p>    
                    <IoLogoJavascript className='text-6xl'/>
                </li>
                <li className='p-2 m-2 flex flex-col items-center'>
                    <p>REACT</p>    
                    <FaReact className='text-6xl'/>
                </li>
                <li className='p-2 m-2 flex flex-col items-center'>
                    <p>TAILWIND</p>    
                    <SiTailwindcss className='text-6xl'/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About
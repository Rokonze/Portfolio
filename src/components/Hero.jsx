import React from 'react'
import profilepic from '../assets/image.jpeg'
import { FaAngleDoubleDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start  max-w-[80%] lg:max-w-[1200px] h-[80vh] mx-auto py-4 ">
            <div className=" my-auto mx-auto w-[400px] h-auto lg:w-[500px] pr-6">
                <img src={profilepic} alt="dog" className='rounded-full shadow-md shadow-[#6384a2]'/>
            </div>
            <div className='px-5 my-auto'>
                <h1 className="bg-gradient-to-b from-[#314c6f] to-[#1f3c5c] text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold">
                    <span className='text-start'>Hi,</span>
                    <br />
                    <span>I'm Iulian</span>
                </h1>
                <p className='text-[#1f3c5c] sm:text-lg my-6 lg:text-xl'>
                    Front-end web developer with a passion for learning and constantly looking for new challenges and opportunities.
                </p>
                
            </div>
        </div>   
        <div className='border-solid border-2 border-[#314c6f] rounded-full p-2 animate-bounce text-2xl'>
            <div className='text-[#314c6f]'><FaAngleDoubleDown /></div>
        </div>
        
    </div>
    
  )
}

export default Hero
import React from 'react'
import profilepic from '../assets/image.jpeg'

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-around max-w-[1200px] h-[70vh] mx-auto py-8 ">
        <div className=" my-auto mx-auto w-[300px] h-auto lg:w-[400px] pr-6">
            <img src={profilepic} alt="dog" className='rounded-full shadow-md shadow-[#6384a2]'/>
        </div>
        <div className='px-5 my-auto'>
            <h1 className="text-[#314c6f] text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span>Hello,</span>
                <br />
                <span>I'm Iulian</span>
            </h1>
            <p className='text-black sm:text-lg my-6 lg:text-xl'>
                Front-end web developer with a passion for learning and constantly looking for new challenges and opportunities.
            </p>
        </div>
        
    </div>   
  )
}

export default Hero
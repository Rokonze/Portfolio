import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%]'>
        <div className=" max-w-[80%] lg:max-w-[1200px] mt-6 rounded-full  mx-auto flex flex-row justify-center md:justify-around   text-[#f9f4e8]  py-6  shadow-xl items-center bg-gradient-to-b from-[#1f3c5c] to-[#314c6f]">
            <h1 className='text-2xl lg:text-4xl w-0 h-0 md:w-auto md:h-auto font-bold invisible md:visible'>S.I.</h1>
            <ul className="flex flex-row ">
                
                <a href="#about">
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2  sm:hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>
                      About
                    </li>
                </a>
                
                <a href="#projects">
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2  sm:hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>
                      Projects
                    </li>
                </a>

                <a href="#contact">
                    <li className='mx-1 px-2 lg:mx-4 lg:px-4 py-2  sm:hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>
                      Contact
                    </li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
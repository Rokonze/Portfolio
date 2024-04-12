import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%]'>
        <div className=" max-w-[1200px] mt-6 rounded-full  mx-auto flex flex-row justify-around  text-[#f9f4e8]  py-6  shadow-xl items-center bg-gradient-to-b from-[#1f3c5c] to-[#314c6f]">
            <h1 className='text-4xl font-bold'>S.I</h1>
            <ul className="flex flex-row ">
                <li className='mx-4 px-4 py-2  hover:bg-[#6384a2] rounded-full font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>About</li>
                <li className='mx-4 px-4 py-2  hover:bg-[#6384a2] rounded-md font-bold active:bg-[#1f3c5c] hover:transition-all duration-300'>Projects</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
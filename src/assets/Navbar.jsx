import React from 'react'
import logo from 'D:/Tasks/React/firsthw/src/Images/logoo.svg'
import log from 'D:/Tasks/React/firsthw/src/Images/Logo.webp';
function Navbar() {
  return (
    <div className='flex justify-between bg-[#E4E4E4] items-center p-3 px-16'>
      <div className='flex basis-1/2 justify-between'>
        <div>
            <img className='w-36' src={logo}></img>
        </div>
        <div>
        <img className='  w-9  rotate' src={log} alt="Logo" />
        </div>
      </div>
        <div className='flex gap-3 basis-1/2 justify-end'>
            <button className=' hover:bg-black hover:text-white transition-all duration-500 border rounded-xl border-black p-4 py-2 text-sm'>Projects</button>
            <button className=' hover:bg-black hover:text-white transition-all duration-500 border rounded-xl border-black p-4 py-2 text-sm'>About</button>
            <button className=' hover:bg-black hover:text-white transition-all duration-500 border rounded-xl font-bold underline border-black text-sm p-4 py-2'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar
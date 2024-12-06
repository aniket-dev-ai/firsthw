import React from 'react'

function FourthPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-12 w-full'>
        <p className='text-sm'>Cases</p>
        <div className='flex flex-col items-center relative'>
            <h1 className='text-[7rem] leading-[6rem] w-[80%] font-bold text-center uppercase'>Head Turning
            Projects</h1>
            <button style={{ transform: 'rotate(-10deg)' }} className='bg-yellow-400 absolute bottom-[3rem] right-[30%] p-6 py-4 rounded-3xl'>
  Gotta see 'm all
</button>
<button className='self-end p-3 border px-6 rounded-xl border-black mt-8 mr-12' >All Projects</button>

        </div>
    </div>
  )
}

export default FourthPage
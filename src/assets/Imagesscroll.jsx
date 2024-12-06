import React from 'react'

import image1 from 'D:/Tasks/React/firsthw/src/Images/image1.webp'
import image2 from 'D:/Tasks/React/firsthw/src/Images/image2.webp'
import image3 from 'D:/Tasks/React/firsthw/src/Images/image3.webp'
import image4 from 'D:/Tasks/React/firsthw/src/Images/image4.webp'
import image5 from 'D:/Tasks/React/firsthw/src/Images/image5.jpg'


function Imagesscroll() {
  return (
    <div className='flex overflow-auto mt-16 gap-8'>
        <img className='h-[95vh] object-cover rounded-[8rem] w-[35vw]' src={image1}></img>
        <img className='h-[95vh] object-cover rounded-[8rem] w-[35vw]' src={image2}></img>
        <img className='h-[95vh] object-cover rounded-[8rem] w-[35vw]' src={image3}></img>
        <img className='h-[95vh] object-cover rounded-[8rem] w-[35vw]' src={image4}></img>
        <img className='h-[95vh] object-cover rounded-[8rem] w-[35vw]' src={image5}></img>
    </div>
  )
}

export default Imagesscroll
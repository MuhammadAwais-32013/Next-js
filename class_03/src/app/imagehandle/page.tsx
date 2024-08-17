import React from 'react'
import Image from 'next/image'
import houseimage from '@/Assets/house.jpeg'
export default function imagehandle() {
  return (
    <div>
      <img src="" alt="" /> 
     <Image 
     src={"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
     height={100} width={100} alt='image'/>
    {/* <Image src={houseimage}
     height={100} width={100} alt='image'/> */}
     {/* <Image src={"/house.jpeg"}  height={200} width={200} alt='house'/> */}
    </div>
  )
}

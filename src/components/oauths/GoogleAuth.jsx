import React from 'react'
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  return (
    <button className='flex gap-1 w-full px-4 py-2 text-[15px] cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-800 my-3'>
      <FcGoogle size={22}/>
      <span>Google</span>
    </button>
  )
}

export default GoogleAuth
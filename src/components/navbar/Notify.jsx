import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { IoPersonAddOutline   } from "react-icons/io5";

const Notify = ({type, title, time}) => {
  return (
    <div>
      <div className='w-full flex items-center justify-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer'>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${type== "comment" ? "bg-blue-50 text-blue-500" : "bg-green-50 text-green-500"}  dark:bg-slate-700 dark:text-gray-200`}>
          {type == "comment" ? <FaRegMessage className='size-4'/> : <IoPersonAddOutline className='size-4'/>}
        </div>
        <div className='w-[80%]'>
          <h3 className='text-sm font-medium dark:to-gray-200 whitespace-nowrap overflow-hidden text-ellipsis'>{title}</h3>
          <p className='text-gray-600 text-xs mt-1 dark:text-gray-400'>{time}</p>
        </div>
      </div>
      <div className='w-full h-[0.5px] dark:bg-gray-600  bg-gray-200'></div>
    </div>
  )
}

export default Notify
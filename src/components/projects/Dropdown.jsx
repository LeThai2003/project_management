import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Dropdown = ({taskId, userId, authorId, assignId}) => {
  return (
    <div className='w-[110px] px-2 py-2 text-xs font-medium text-slate-600 bg-white dark:bg-slate-800 dark:text-gray-200 border border-gray-200 rounded dark:border-gray-600 shadow-2xl z-10'>
      
      {/* sau nay link sang trang chi tiet */}
      <Link to={`/task/${taskId}`} className='flex gap-2 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 px-3 py-1'>
        <IoEyeOutline className='-mb-[1px]' size={16}/>
        <p>View</p>
      </Link>
      {/* <div className='flex gap-2 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 px-3 py-1'>
        <IoEyeOutline className='-mb-[1px]' size={16}/>
        <p>View</p>
      </div> */}

      
      {userId == assignId || userId == authorId ?  // sau nay onClick thi link sang trang chinh sua 
        <div className='flex gap-2 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 px-3 py-1 mt-3'>
            <CiEdit className='' size={16}/>
            <p>Edit</p>
        </div> : null
      }

      
      {userId == authorId ? 
        <div className='mt-2'>
          <div className='w-full h-[0.5px] dark:bg-gray-600  bg-gray-200'></div>
          <div className='flex gap-2 items-center justify-start mt-3 px-3 py-1 rounded cursor-pointer bg-red-100 text-red-600 hover:bg-red-200 dark:hover:bg-slate-700 dark:bg-slate-900'>
            <FiTrash className='' size={16}/>
            <p className='font-bold'>Delete</p>
          </div>
        </div> : null
      }

    </div>
  )
}

export default Dropdown
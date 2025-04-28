import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useParams } from 'react-router-dom'

const InputSubTask = ({listSubTask, setListSubTask}) => {

  const {id} = useParams();  // projectId

  const [inputValue, setInputValue] = useState("");

  const addNewTask = () => {
    setListSubTask([
      ...listSubTask,
      {
        "sub_task_id": `${id}-${Date.now()}`,   // sau nay se doi thanh id cua task khi tao moi (cap nhat)
        "sub_title": inputValue,
        "isChecked": false
      }
    ]);
    setInputValue("");
  }

  const handleKeyDown = (e) => {
    if(e.key == "Enter" && e.target.value.trim())
    {
      addNewTask();
    }
  }

  const handleRemoveTask = (idSubTask) => {
    setListSubTask(listSubTask?.filter(item => item["sub_task_id"] != idSubTask));
  }

  console.log(listSubTask);

  return (
    <div className='mt-4 mb-4'>
      <div className='flex flex-col gap-3 mb-3 border-l-2 border-green-200 border-dashed dark:border-white'>
        {listSubTask?.map(task => (
          <div 
            key={task["sub_task_id"]}
            className='px-4 py-2 w-fit rounded-lg bg-green-100 dark:bg-slate-800 mx-2 flex items-center justify-between gap-2'
          >
            <p className='text-sm text-green-800 dark:text-gray-300 tracking-[0.15px]'>{task["sub_title"]}</p>
            <IoClose className='size-4 dark:text-gray-400 cursor-pointer text-green-900 dark:hover:text-gray-100 hover:text-slate-600' onClick={() => handleRemoveTask(task["sub_task_id"])}/>
          </div>
        ))}
      </div>

      <div className='flex justify-start items-center gap-4'>
        <div>
          <input 
            type="text" 
            placeholder='Enter a sub task' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className='w-96 px-4 py-2 outline-none border border-gray-200 rounded-lg text-sm text-slate-900 bg-gray-50 dark:bg-dark-tertiary dark:border-gray-600 dark:text-gray-200'  
          />
        </div>
        <div className='bg-gray-50 w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-100 dark:bg-dark-tertiary dark:border-gray-600 dark:text-gray-200 dark:hover:bg-slate-700'>
          <FiPlus className='size-6'/>
        </div>
      </div>
    </div>
  )
}

export default InputSubTask
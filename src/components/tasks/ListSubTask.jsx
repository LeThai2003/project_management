import React from 'react'

const ListSubTask = ({listSubTasks}) => {
  return (
    <div className='px-1 pt-4 pb-2'>
      {listSubTasks?.length > 0 ? 
        <div className=''>
          <div name="tasksChecked">
            {listSubTasks?.map(item => (
              <div key={item.sub_task_id} class="flex items-center mt-4">
                <input id="checked-checkbox" type="checkbox" value={item.sub_task_id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checked-checkbox" class="ms-2 text-sm tracking-[0.2px] text-gray-700 dark:text-gray-300">{item.sub_title}</label>
              </div>
            ))}
          </div>

          <button 
            className='mt-5 w-full px-4 py-2 cursor-pointer bg-violet-500 hover:bg-purple-600 uppercase rounded-lg flex items-center justify-center text-white font-medium my-3 dark:text-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700'

          >
            Cập nhật công việc
          </button>
        </div> 
          : 
        <div>
          <p className='text-sm italic text-blue-500 dark:text-gray-200'>No list sub tasks</p>

          <div class="flex items-center mt-4">
            <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checked-checkbox" class="ms-2 text-sm tracking-[0.2px] text-gray-700 dark:text-gray-300">Compeleted Task</label>
          </div>

          <button 
            className='mt-4 w-full px-4 py-2 cursor-pointer bg-violet-500 hover:bg-purple-600 uppercase rounded-lg flex items-center justify-center text-white font-medium my-3 dark:text-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700'

          >
            Cập nhật công việc
          </button>
        </div>
      }
    </div>
  )
}

export default ListSubTask
import React from 'react'
import Modal from '../Modal'
import {useParams} from "react-router-dom"
import { IoSearchOutline } from 'react-icons/io5';
import { getNameInitials } from '../../utils/helper';

const ModalAllTeamInProject = ({isOpen, onClose, dataMemeber}) => {

  const {id} = useParams();
  // console.log(id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="All Members in Project" widthTight={true}>
      <div className='w-full py-3 flex flex-col'>
        <div className='relative flex items-center'>
          <input 
            type="text" 
            className='w-72 outline-none border bg-gray-100 dark:border-gray-600 dark:bg-dark-tertiary dark:text-white pl-8 pr-4 py-1 rounded-lg text-sm'
            placeholder='Search Member'
          />
          <IoSearchOutline className='absolute left-2 top-[8px] size-4 dark:text-white'/>
        </div>

        <div className='flex flex-col h-[380px] overflow-y-auto custom-scrollbar pr-2 mt-2'>
          <div className=''>
            {dataMemeber.map((member, index) => (
              <div key={index} className='flex items-center justify-between w-full my-3 px-2 py-3 border border-gray-100 rounded-md dark:border-gray-600 bg-white dark:bg-dark-secondary'>
                
                <div className='flex justify-start gap-3 items-center'>
                  {member.profileImageUrl ? 
                    <img
                      src={member.profileImageUrl}
                      alt='profile image'
                      className='size-14 rounded-full flex items-center justify-center border border-blue-200 dark:border-gray-200'
                    /> 
                    : 
                    <div className='size-14 text-sm font-medium text-green-800 dark:text-gray-200 bg-green-50 dark:bg-slate-700 rounded-full flex items-center justify-center border border-green-200 dark:border-gray-200'>
                      {getNameInitials(member.name)}  
                    </div>
                  }

                  <div className='flex flex-col'>
                    <h3 className='text-sm font-medium dark:text-gray-200'>{member.name}</h3>
                    <p className='text-xs text-gray-600 dark:text-gray-200 mt-1'>{member?.description}</p>
                  </div>
                </div>

                <div className="flex flex-col dark:bg-dark-secondary pr-1">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <p className="italic">
                      Created Task: <span className="font-semibold text-blue-600 dark:text-blue-400">3</span>
                    </p>
                  </div>
                  <div className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <p className="italic">
                      Assigned Task: <span className="font-semibold text-green-600 dark:text-green-400">2</span>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default ModalAllTeamInProject
import React, { useState } from 'react'
import Modal from '../Modal';
import { IoSearchOutline } from 'react-icons/io5';
import { getNameInitials } from '../../utils/helper';

const ModalAddMember = ({isOpen, onClose, dataMemeber}) => {

  const [email, setEmail] = useState("");
 
  const objectAdd = dataMemeber?.map(item => (
    {
      ...item,
      isAdd: false
    }
  ))

  const [oMembers, setOMember] = useState(objectAdd)   // tuc la sau nay search ra thi tao lai mang moi

  const handleAdd = (memberId) => {
    const updatedMembers = oMembers.map(item =>
      item.id === memberId ? { ...item, isAdd: true } : item
    );
    setOMember(updatedMembers);
  }

  const handleRemove = (memberId) => {
    const updatedMembers = oMembers.map(item =>
      item.id === memberId ? { ...item, isAdd: false } : item
    );
    setOMember(updatedMembers);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Member To Project" widthTight={true}>
      <div className='w-full py-3 flex flex-col'>
        <div className='relative flex items-center'>
          <input 
            type="text" 
            className='w-72 outline-none border bg-gray-100 dark:border-gray-600 dark:bg-dark-tertiary dark:text-white pl-8 pr-4 py-1 rounded-lg text-sm'
            placeholder="Enter member's email to add"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <IoSearchOutline className='absolute left-2 top-[8px] size-4 dark:text-white'/>
        </div>

        <div className='flex flex-col h-[380px] overflow-y-auto custom-scrollbar pr-2 mt-2'>
          <div className=''>
            {oMembers.map((member, index) => (
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

                {
                  member.isAdd ? (
                    <button 
                      className='mr-1 px-4 py-1 border border-red-200 dark:border-gray-600 bg-red-50 hover:bg-red-100 dark:bg-slate-700 dark:hover:bg-opacity-85 text-red-500 dark:text-gray-200 flex items-center justify-center rounded-md text-sm font-medium'
                      onClick={() => handleRemove(member.id)}   // thay index = id
                    >
                      REMOVE
                    </button>
                  ) : (
                    <button 
                      className='mr-1 px-4 py-1 border border-blue-200 dark:border-gray-600 bg-blue-50 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-opacity-85 text-blue-500 dark:text-gray-200 flex items-center justify-center rounded-md text-sm font-medium'
                      onClick={() => handleAdd(member.id)}
                    >
                      ADD
                    </button>  // sau nay con nut added
                  )
                }

              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAddMember
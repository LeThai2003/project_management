import React, { useState } from 'react'
import CommentList from './CommentList'
import moment from 'moment'
import { getNameInitials } from '../../utils/helper'
import { FaEdit } from "react-icons/fa";
import { LuHeart, LuTrash2 } from 'react-icons/lu'
import { FaReply } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

const Comment = ({comment, commentsByParentId}) => {

  const dateFormat = moment(comment.createdAt).format("DD-MM-yyyy HH:mm:ss");

  const {currentUser} = useSelector(state => state.users);

  const childComments = commentsByParentId[comment._id];

  const [areChildrenHidden, setAreChildrenHidden] = useState(true)

  return (
    <div className=''>
      <div className='flex flex-col border border-gray-200 mb-2 dark:border-gray-600 rounded-md px-4 py-2'>
        {/* header */}
        <div className='flex gap-2 items-center'>
          {
            comment.userId.profilePicture ? 
              <div className='w-fit border border-gray-200 rounded-full'>
                <img
                  src={comment.userId.profilePicture}
                  alt='image assignee'
                  width={30}
                  height={30}
                  className='size-8 rounded-full object-cover dark:border-dark-secondary'
                />
              </div>
              :
              <div className='size-8 text-sm font-medium text-green-800 dark:text-gray-200 bg-green-50 dark:bg-slate-700 rounded-full flex items-center justify-center border border-green-200 dark:border-gray-200'>
                {getNameInitials(comment.userId.fullname)}  
              </div>
          }  
          <div >
            <p className='text-sm font-medium'>{comment.userId.fullname}</p>
            <p className='text-xs text-slate-500 dark:text-slate-300'>{dateFormat}</p>
          </div>
        </div>

        {/* message */}
        <div className="ml-10 text-md text-gray-800 dark:text-gray-200 tracking-[0.2px] my-1 text-justify">{comment.message}</div>

        {/* footer */}
        <div className='ml-10 flex items-center justify-start gap-3 text-gray-400 dark:text-gray-300 mt-1'>
          <LuHeart className="size-[15px] cursor-pointer" />
          <FaReply className="size-[15px] cursor-pointer" />
          {
            currentUser._id == comment.userId._id &&
            <>
              <FaEdit className="size-[15px] cursor-pointer" />
              <LuTrash2 className="size-[15px] cursor-pointer text-red-500" />
            </>
          }
        </div>
      </div>

      {
        childComments?.length > 0 && (
          <div className=''>
            <div className={`${areChildrenHidden ? "hidden" : ""} flex items-stretch`}>

              <button
                className={`relative border-none p-0 w-[25px] mb-2 cursor-pointer outline-none -translate-x-[50%] 
                  before:absolute before:content-[""] before:top-0 before:bottom-0 before:left-[50%] before:w-[1px] before:bg-slate-400
                  before:hover:bg-slate-500 before:hover:w-[1.5px] dark:before:hover:bg-slate-300 before:transition before:duration-75
                `}
                onClick={() => setAreChildrenHidden(true)}
              />

              <div className='flex-1'>
                <CommentList 
                  commentsByParentId={commentsByParentId} 
                  parentId={comment._id}
                />
              </div>
            </div>

            {areChildrenHidden && (
              <button
                className="mb-3 px-4 py-1.5 text-white text-sm font-medium rounded-full bg-blue-600"
                onClick={() => setAreChildrenHidden(false)}
              >
                Show Replies
              </button>
            )}

          </div>
        )
      }

    </div>
  )
}

export default Comment
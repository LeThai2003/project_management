import React, { useEffect, useRef, useState } from 'react'
import { LuImage, LuPaperclip, LuSend, LuSmile } from 'react-icons/lu';

const CommentForm = () => {

  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState();

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if(textarea)
    {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [message]);

  return (
    <div className="my-5 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm w-full  border border-gray-100 dark:border-gray-600">
      <textarea 
        type="text" 
        rows={1}
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='w-full resize-none overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm text-gray-800 dark:text-gray-100 rounded-xl px-4 py-2 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500'
        autoFocus
        placeholder='Comment...'
      />
      <div className='flex items-center justify-between mt-1'>
        <div className='flex items-center justify-start gap-3 text-gray-400 dark:text-gray-300'>
          <LuSmile className="size-5 cursor-pointer hover:text-yellow-500" />
          <LuImage className="size-5 cursor-pointer hover:text-blue-500" />
          <LuPaperclip className="size-5 cursor-pointer hover:text-green-500" />
        </div>
        <button
          disabled={!message.trim()}
          className={`flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-full text-white ${message.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"}`}
        >
          <LuSend className='size-4'/>
          POST
        </button>
      </div>
      
    </div>
  )
}

export default CommentForm
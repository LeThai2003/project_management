import React, { useEffect, useRef, useState } from 'react'
import { LuImage, LuPaperclip, LuSend, LuSmile } from 'react-icons/lu';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment, updateComment } from '../../redux/comments/commentSlice';

const CommentForm = ({parentId, type, initialValue, setEditing}) => {

  const {id} = useParams();

  const dispatch = useDispatch();

  const [message, setMessage] = useState(initialValue);
  const [image, setImage] = useState("");
  const [file, setFile] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if(textarea)
    {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    }
  }, [message]);

  const handleSubmit = async () => {
    console.log(message);
    if(!message.trim()) return;
    setIsLoading(true);
    if(type == "create")
    {
      try {
        const response = await axiosInstance.post(API_PATHS.COMMENT.CREATE(id), {
          message, parentId
        });
        // console.log(response.data);
        setMessage("");
        dispatch(addComment(response.data.comment));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    else
    {
      try {
        const response = await axiosInstance.patch(API_PATHS.COMMENT.UPDATE(parentId), {  // parentID --> id cua comment
          message
        });
        console.log(response.data);
        setMessage("");
        dispatch(updateComment(response.data.comment));
        setIsLoading(false);
        setEditing(false)
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  }

  return (
    <div className=" bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm w-full  border border-gray-100 dark:border-gray-600">
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
          disabled={!message.trim() || isLoading}
          className={`uppercase flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-full text-white ${message.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"}`}
          onClick={handleSubmit}
        >
          <LuSend className='size-4'/>
          {isLoading ? (type == "create" ?  "Posting" : "updating") : (type == "create" ? "POST" : "Update")}
        </button>
      </div>
      
    </div>
  )
}

export default CommentForm
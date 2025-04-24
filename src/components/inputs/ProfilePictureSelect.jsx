import React, { useRef, useState } from 'react'
import {LuUser, LuUpload, LuTrash} from "react-icons/lu";

const ProfilePictureSelect = ({image, setImage}) => {

  console.log("component rendered");

  const inputRef = useRef(null);

  const [previewPictureUrl, setPreviewPictureUrl] = useState(null);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if(file)
    {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewPictureUrl(preview);
    }

    e.target.value = null;
  }

  const handleChooseFile = () => {
    inputRef.current.click();
  }

  const handleRemove = () => {
    setImage(null);
    setPreviewPictureUrl(null);
    // inputRef.current.value = null;
  }

  return (
    <div className='flex justify-center mt-3 mb-3'>
      <input type="file" accept='image/*' ref={inputRef} onChange={handleChangeImage} className='hidden'/>

      {!image ? (
          <div className='relative size-20 flex items-center justify-center rounded-full bg-purple-100'>
            <LuUser className='text-4xl text-primary'/>
            <button type='button' className='absolute -right-1 -bottom-1 bg-purple-600 hover:bg-purple-700 text-white size-8 flex items-center justify-center rounded-full cursor-pointer' onClick={handleChooseFile}>
              <LuUpload/>
            </button>
          </div>
        ) : (
          <div className='relative'>
            <img src={previewPictureUrl} alt="image profile" className='size-20 rounded-full object-cover'/>
            <button type='button' className='absolute -right-1 -bottom-1 bg-red-400 hover:bg-red-500 text-white size-8 flex items-center justify-center rounded-full cursor-pointer' onClick={handleRemove}>
              <LuTrash/>
            </button>
          </div>
        )
      }
    </div>
  )
}

export default ProfilePictureSelect
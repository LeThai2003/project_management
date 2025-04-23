import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

const Input = ({label, value, onChange, placeholder, type, id}) => {

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='mt-3'>
      <label htmlFor={id} className='text-slate-800 text-[14px] pl-1 font-medium'>{label}</label>
      <div className='input-box'>
        <input 
          id={id} 
          value={value} 
          placeholder={placeholder} 
          type={type == "password" ? showPassword ? "text" : 'password' : type}
          onChange={onChange}
          className='w-full outline-none'
        />
        {type == "password" && 
          <>
            {showPassword ? 
              <FaRegEye className='text-primary cursor-pointer' size={22} onClick={toggleShowPassword}/> 
              : 
              <FaRegEyeSlash className='text-gray-400 cursor-pointer' size={22} onClick={toggleShowPassword} />
            } 
          </>
        }
      </div>
    </div>
  )
}

export default Input
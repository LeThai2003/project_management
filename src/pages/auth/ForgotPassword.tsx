import React, { useState } from 'react'
import { IoIosArrowBack, IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/inputs/Input';


const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if(!validateEmail(email))
    {
      setError("Vui lòng nhập đúng định dạng email.");
      return;
    }

    setError("");

    // fetch API
    
  }

  return (
    <div className='relative bg-gradient-to-r from-sky-100 via-blue-200 to-emerald-100 w-full min-h-screen'>
      
      <div 
        onClick={() => navigate(-1)}
        className='absolute top-2 left-3 flex items-center justify-center gap-2 px-3 py-1 rounded text-sm font-medium text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-dark-tertiary cursor-pointer transition-all duration-200'
      >
        <IoIosArrowBack className='size-4'/>
        <p>Back</p>
      </div>

      <div className=' w-full h-lvh flex justify-center items-center'>
    
        <div className='w-96 border border-gray-300 rounded-lg bg-white px-7 py-10'>
          <form onSubmit={handleForgotPassword}>
            <h4 className='text-2xl mb-7'>Get OTP code</h4>

            {/* <input 
              type="email" 
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}

            <Input
              type="email" 
              placeholder='Email'
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />

            {error && <p className='text-sm text-red-500 pb-1'>{error}</p>}

            <button type='submit' className='btn-primary mt-4'>Get OTP</button>

            <p className='text-center mt-2 text-sm'><i><b>Note: </b> The OTP code will be sent by your email!</i></p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ForgotPassword

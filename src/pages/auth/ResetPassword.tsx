import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { validateOTP } from '../../utils/helper';
import Navbar from '../../components/Navbar/Navbar';
import { IoIosArrowBack, IoMdArrowBack } from "react-icons/io";
import Input from '../../components/inputs/Input';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const handleBack = () => {
    navigate(-1);
  }

  const handleOtpPassword = async (e) => {
    e.preventDefault();

    if(!newPassword)
    {
      setError("Vui lòng nhập mật khẩu mới.");
      return;
    }

    setError("");

    const accessToken = localStorage.getItem("token");

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

      <div className='w-full h-lvh flex justify-center items-center'>

        <div className='w-96 border border-gray-300 rounded-lg bg-white px-7 py-10'>
          <form onSubmit={handleOtpPassword}>
            <h4 className='text-2xl mb-7'>Enter New Password</h4>

            <Input
              value={newPassword}
              id="newpassword"
              label="New Password"
              placeholder="Password"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />

            {error && <p className='text-sm text-red-500 pb-1'>{error}</p>}

            <button type='submit' className='btn-primary mt-4'>SEND</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ResetPassword

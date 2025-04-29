import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoSearchOutline, IoMoonOutline, IoSettingsOutline, IoSunnyOutline, IoPersonAddOutline   } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setIsDarkMode, setIsSiderMenuCollapsed } from '../../redux/globals';
import { GoBell } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import Notify from './Notify';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {

  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.globals);
  const {isSiderMenuCollapsed} = useSelector(state => state.globals);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isOpenDropdownAvatar, setIsOpenDropdownAvatar] = useState(false);

  // console.log(isDarkMode);

  const dropdownRef = useRef(null);
  const avatarDropdown = useRef(null);

  //Xử lý click bên ngoài dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  //Xử lý click bên ngoài dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarDropdown.current && !avatarDropdown.current.contains(event.target)) {
        setIsOpenDropdownAvatar(false);
      }
    };

    if (isOpenDropdownAvatar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenDropdownAvatar]);

  return (
    <div className='flex justify-between px-4 py-3 bg-white dark:bg-dark-bg dark:border-b dark:border-gray-700'>
      <div className='flex items-center'>
        
        {isSiderMenuCollapsed ?
          <button className='btn-icon' onClick={() => dispatch(setIsSiderMenuCollapsed(false))}>
            <IoIosMenu />
          </button>
          : 
          null
        }
        <button className='btn-icon'> 
          <IoSearchOutline />
        </button>
      </div>
      <div className='flex items-center'>
        <button className='btn-icon' onClick={() => dispatch(setIsDarkMode(!isDarkMode))}>
          {isDarkMode ? 
            <IoSunnyOutline className='cursor-pointer' /> 
            : 
            <IoMoonOutline className='cursor-pointer'/>
          }
        </button>
        <Link href="#" className='btn-icon'>
          <IoSettingsOutline className='cursor-pointer'/>
        </Link>

        <div className='w-[0.1rem] min-h-[2em] bg-gray-200 ml-2 mr-2'></div>

        <div className='relative' ref={dropdownRef}>
          <button 
            className='btn-icon' 
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <GoBell className='cursor-pointer'/>
          </button>

          <div className={`absolute top-10 right-0 bg-white dark:bg-slate-800 dark:text-gray-200 dark:border-gray-600 w-[350px] h-[375px] rounded border border-gray-100 z-10 shadow-xl transition-all duration-200 ease-out ${isNotificationOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            
            <div className='w-full flex items-center justify-between px-4 py-5'>
              <div className='flex items-center justify-center gap-2'>
                <GoBell className='cursor-pointer size-4 -mb-[2px]'/>
                <h4 className='text-sm font-medium dark:text-gray-200'>Notifications</h4>
              </div>
              <button className='text-blue-500 text-xs px-5 py-2 rounded hover:bg-blue-50 transition-all duration-200 dark:text-gray-200 dark:hover:bg-slate-700'>
                View All
              </button>
            </div>

            <div className='w-full h-[0.5px] dark:bg-gray-600 bg-gray-200'></div>

            <div className='overflow-y-auto custom-scrollbar h-[290px]'>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
              <Notify type="comment" title="You received a new comment in project Apollo" time="25/04/2025 22:10"/>
            </div>

          </div>
        </div>
        
        <div ref={avatarDropdown} className='relative'>
          <div 
            className='w-10 h-10 rounded-full overflow-hidden border border-gray-500 ml-2 cursor-pointer'
            onClick={() => setIsOpenDropdownAvatar(!isOpenDropdownAvatar)}  
          >
            <img 
              src="https://enlink.themenate.net/assets/images/avatars/thumb-3.jpg" 
              alt="image profile" 
              className='w-10 h-10 object-cover'  
            />
          </div>

          <div className={`absolute top-10 bg-white right-0 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-600 w-[265px] h-fit rounded border border-gray-100 z-10 shadow-2xl transition-all duration-200 ease-out ${isOpenDropdownAvatar ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className='flex justify-start items-center py-4 px-4 gap-3'>
              <div className='border border-gray-500 size-11 rounded-full'>
                <img 
                  src="https://enlink.themenate.net/assets/images/avatars/thumb-3.jpg" 
                  alt="image profile" 
                  className='w-11 h-11 object-cover rounded-full'  
                />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-sm font-medium text-gray-800 dark:text-gray-200'>Marshall Nichols</h3>
                <p className='mt-1 text-slate-400 text-sm dark:text-gray-300 tracking-[0.15px]'>UI/UX Desinger</p>
              </div>
            </div>

            <div className='border-b border-gray-100 dark:border-gray-600'></div>

            <div className='text-sm py-2'>
              <div className='px-4 py-3 flex justify-start items-center gap-3 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-800'>
                <FaRegUser size-4/>
                <p className=''>Edit Profile</p>
              </div>
              <div className='px-4 py-3 flex justify-start items-center gap-3 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-800'>
                <MdOutlineLock size-4/>
                <p className=''>Account Setting</p>
              </div>
              <div className='px-4 py-3 flex justify-start items-center gap-3 hover:bg-red-50 text-red-600 dark:text-slate-400 dark:hover:text-slate-200 dark:font-bold dark:hover:bg-slate-900'>
                <AiOutlineLogout size-4/>
                <p className=''>Logout</p>
              </div>
            

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Navbar
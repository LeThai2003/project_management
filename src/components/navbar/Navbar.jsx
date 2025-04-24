import React from 'react'
import { IoMenu, IoSearchOutline, IoMoonOutline, IoSettingsOutline, IoSunnyOutline  } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setIsDarkMode, setIsSiderMenuCollapsed } from '../../redux/globals';

const Navbar = () => {

  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.globals);
  const {isSiderMenuCollapsed} = useSelector(state => state.globals);

  // console.log(isDarkMode);

  return (
    <div className='flex justify-between px-4 py-3 bg-white dark:bg-dark-bg dark:border-b dark:border-gray-700'>
      <div className='flex items-center'>
        
        {isSiderMenuCollapsed ?
          <button className='btn-icon'>
            <IoIosMenu onClick={() => dispatch(setIsSiderMenuCollapsed(false))}/>
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
        <div className='w-[0.1rem] min-h-[2em] bg-gray-200 ml-2 mr-5'></div>
      </div>
    </div>
  )
}

export default Navbar
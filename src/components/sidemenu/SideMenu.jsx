import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import SideMenuLink from './SideMenuLink';
import { IoHomeOutline, IoSearchOutline, IoSettingsOutline, IoAlert } from "react-icons/io5";
import { MdViewTimeline } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { AiOutlineAlert } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { LuCircleAlert } from "react-icons/lu";
import { BiLayer } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setIsSiderMenuCollapsed } from '../../redux/globals';

const SideMenu = () => {

  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  
  const dispatch = useDispatch();
  const {isSiderMenuCollapsed} = useSelector(state => state.globals);

  const dataProjects = [
    {
      "id": 1,
      "name": "Apollo",
      "description": "A space exploration project.",
      "startDate": "2023-01-01T00:00:00Z",
      "endDate": "2023-12-31T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Beacon",
      "description": "Developing advanced navigation systems.",
      "startDate": "2023-02-01T00:00:00Z",
      "endDate": "2023-10-15T00:00:00Z"
    },
    {
      "id": 3,
      "name": "Catalyst",
      "description": "A project to boost renewable energy use.",
      "startDate": "2023-03-05T00:00:00Z",
      "endDate": "2024-03-05T00:00:00Z"
    },
    {
      "id": 4,
      "name": "Delta",
      "description": "Delta project for new software development techniques.",
      "startDate": "2023-01-20T00:00:00Z",
      "endDate": "2023-09-20T00:00:00Z"
    },
    {
      "id": 5,
      "name": "Echo",
      "description": "Echo project focused on AI advancements.",
      "startDate": "2023-04-15T00:00:00Z",
      "endDate": "2023-11-30T00:00:00Z"
    },
  ];
  


  return (
    <div className={`flex flex-col fixed h-full shadow-xl transition-all duration-300 bg-white dark:bg-dark-bg ${isSiderMenuCollapsed ? "w-0 hidden" : "w-[250px]"}  z-50 overflow-y-auto custom-scrollbar`}>
      
      <div className='flex justify-between items-center px-6 pt-4 pb-5 dark:bg-black'>
        <div className='text-xl font-bold text-gray-900 tracking-wide dark:text-white'>EJIRA</div>
        <button>
          <MdOutlineClose onClick={() => dispatch(setIsSiderMenuCollapsed(true))} className='text-2xl text-gray-800 hover:text-gray-500 dark:text-white'/>
        </button>
      </div>

      <div className='px-6 py-4 border-y-[1.5px] border-gray-200 flex items-center gap-5 dark:border-gray-700 dark:bg-black'>
        <img src="/logo.png" alt="logo image" width={50} height={50} />
        <div>
          <h3 className="text-sm font-bold tracking-wide dark:text-gray-200">EJIRA TEAM</h3>
          <div className='flex items-center justify-start gap-2 mt-1'>
            <CiLock className='size-4 dark:text-white'/>
            <p className='text-xs text-gray-500'>Private</p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <SideMenuLink label="Home" href="/home" icon={IoHomeOutline}/>
        <SideMenuLink label="Timeline" href="/timeline" icon={MdViewTimeline}/>
        <SideMenuLink label="Search" href="/search" icon={IoSearchOutline}/>
        <SideMenuLink label="Settings" href="/settings" icon={IoSettingsOutline}/>
      </div>

      <button onClick={() => setShowProjects(!showProjects)} className='w-full flex items-center justify-between text-gray-500 dark:bg-dark-bg px-6 py-3'>
        <p className='text-sm'>Projects</p>
        {showProjects ? <FaChevronUp className='size-3'/> : <FaChevronDown className='size-3'/> }
      </button>
      {showProjects && dataProjects?.map((project, index) => (
        <SideMenuLink key={index} label={project?.name} href={`/project/${index}`} icon={FiBriefcase}/>
      ))}

      <button onClick={() => setShowPriority(!showPriority)} className='w-full flex items-center justify-between text-gray-500 dark:bg-dark-bg px-6 py-3'>
        <p className='text-sm'>Priorities</p>
        {showPriority ? <FaChevronUp className='size-3'/> : <FaChevronDown className='size-3'/> }
      </button>
      {showPriority && (<>
        <SideMenuLink label="Urgent" href="#" icon={AiOutlineAlert}/>
        <SideMenuLink label="Hight" href="#" icon={LuCircleAlert}/>
        <SideMenuLink label="Medium" href="#" icon={GoAlert}/>
        <SideMenuLink label="Low" href="#" icon={IoAlert}/>
        <SideMenuLink label="Backlog" href="#" icon={BiLayer}/>
      </>)}

    </div>
  )
}

export default SideMenu
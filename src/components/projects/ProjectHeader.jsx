import React, { useState } from 'react'
import Header from './Header';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoSearchOutline} from "react-icons/io5";
import { LuGrid3X3, LuList, LuClock, LuTable } from "react-icons/lu";
import ModalNewProject from './ModalNewProject';
import TeamMember from './TeamMember';
import ModalAllTeamInProject from './AllTeamInProject';
import TabButton from '../tabButtons/TabButton';

const ProjectHeader = ({activeTab, setActiveTab, name}) => {

  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);


  return (
    <div className=''>

      <ModalNewProject 
        isOpen={isModalNewProjectOpen}
        onClose={() => setIsModalNewProjectOpen(false)}
      />

      <div className='pb-2 px-3'>
        <Header
          name={""}
          buttonComponet={
            <button className='flex items-center gap-2 rounded-lg bg-blue-primary hover:bg-blue-600 text-white px-3 py-2'
              onClick={() => setIsModalNewProjectOpen(true)}
            >
              <FaRegPlusSquare className='-mb-[2px] size-4 text-white'/>New Board
            </button>
          }
        />
      </div>

     
      <TeamMember name="Apollo"/>

      <div className='flex flex-wrap-reverse gap-2 border-y border-gray-200 dark:border-stroke-dark md:items-center px-3 py-2'>
        <div className='flex flex-1 gap-2 md:gap-4 items-center'>
          <TabButton name="Board" icon={<LuGrid3X3 className='size-5'/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabButton name="List" icon={<LuList className='size-5'/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabButton name="Timeline" icon={<LuClock className='size-5'/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabButton name="Table" icon={<LuTable className='size-5'/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>

        <div className='relative flex items-center'>
          <input 
            type="text" 
            className='outline-none border bg-gray-100 dark:border-gray-600 dark:bg-dark-tertiary dark:text-white pl-8 pr-4 py-1 rounded-lg text-sm'
            placeholder='Search Tasks'
          />
          <IoSearchOutline className='absolute left-2 top-[7px] size-4 dark:text-white'/>
        </div>
      </div>


    </div>
  )
}

export default ProjectHeader




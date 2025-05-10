import React, { useState } from 'react'
import Header from './Header';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoSearchOutline} from "react-icons/io5";
import { LuGrid3X3, LuList, LuClock, LuTable } from "react-icons/lu";
import ModalNewProject from './ModalNewProject';
import TeamMember from './TeamMember';
import ModalAllTeamInProject from './AllTeamInProject';
import TabButton from '../tabButtons/TabButton';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProjectHeader = ({activeTab, setActiveTab}) => {

  const [modalNewProjectOpen, setModalNewProjectOpen] = useState({
    isOpen: false,
    type: "create",
    data: null
  });

  const {projects} = useSelector(state => state.projects);
  const {currentUser} = useSelector(state => state.users);

  // console.log(currentUser);

  const projectId = useParams().id;

  const dataProject = projects.find(item => item._id == projectId);
  // console.log(dataProject);

  return (
    <div className=''>

      <ModalNewProject 
        isOpen={modalNewProjectOpen.isOpen}
        onClose={() => setModalNewProjectOpen({isOpen: false, type: "create", data: null})}
        type={modalNewProjectOpen.type}
        data={modalNewProjectOpen.data}
      />

      <div className='pb-2 px-3'>
        <Header
          name={""}
          buttonComponet={
            <button className='flex items-center gap-2 rounded-lg bg-blue-primary hover:bg-blue-600 text-white px-3 py-2'
              onClick={() => setModalNewProjectOpen({isOpen: true, type: "create", data: null})}
            >
              <FaRegPlusSquare className='-mb-[2px] size-4 text-white'/>New Board
            </button>
          }
        />
      </div>

     
      <TeamMember 
        dataProject={dataProject} 
        allowEdit={dataProject && currentUser && dataProject.authorUserId._id == currentUser._id} 
        modalNewProjectOpen={modalNewProjectOpen} 
        setModalNewProjectOpen={setModalNewProjectOpen}
      />

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




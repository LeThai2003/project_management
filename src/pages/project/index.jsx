import React, { useState } from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import ProjectHeader from '../../components/projects/ProjectHeader';
import ViewBoardProject from './Board';
import ModalNewTask from '../../components/tasks/ModalNewTask';

const Project = () => {

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <HomeLayout>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        type="create"
      />

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} name="Apollo"/>

      {activeTab == "Board" && <ViewBoardProject setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}

    </HomeLayout>
  )
}

export default Project
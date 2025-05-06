import React, { useEffect, useState } from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import ProjectHeader from '../../components/projects/ProjectHeader';
import ViewBoardProject from './Board';
import ModalNewTask from '../../components/tasks/ModalNewTask';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';

const Project = () => {

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const {id} = useParams();
  // console.log(id);

  const [dataProject, setDataProject] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.PROJECT.GET_DETAIL(id));
        setDataProject(response.data.project);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <HomeLayout>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        type="create"
      />

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} name={dataProject && dataProject.name}/>

      {activeTab == "Board" && <ViewBoardProject setIsModalNewTaskOpen={setIsModalNewTaskOpen} projectId={id}/>}

    </HomeLayout>
  )
}

export default Project
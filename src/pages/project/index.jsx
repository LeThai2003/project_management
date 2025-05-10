import React, { useEffect, useState } from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import ProjectHeader from '../../components/projects/ProjectHeader';
import ViewBoardProject from './Board';
import ModalNewTask from '../../components/tasks/ModalNewTask';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../redux/tasks/taskSlice';

const Project = () => {

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const {id} = useParams();
  
  const dispatch = useDispatch();
  const {tasks} = useSelector(state => state.tasks);

  const getDataTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASK.GET_ALL, {
        params: {
          projectId: id
        }
      });
      dispatch(setTasks(response.data.tasks));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataTasks();
  }, [id]);


  return (
    <HomeLayout>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        type="create"
        projectId={id}
      />

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab == "Board" && <ViewBoardProject data={tasks} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}

    </HomeLayout>
  )
}

export default Project
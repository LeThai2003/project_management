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
import { convertToSlug } from '../../utils/converToSlug';
import ListProject from './ListProject';
import TableProject from './TableProject';
import TimelineProject from './TimelineProject';

const Project = () => {

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const {id} = useParams();
  
  const dispatch = useDispatch();
  const {tasks} = useSelector(state => state.tasks);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
    setSearch("");
  }, [id]);

  useEffect(() => {
    if (search.trim() === "") 
    {
      setSearchResult(tasks); 
    } 
    else 
    {
      const searchSlug = convertToSlug(search);
      const filteredTasks = tasks.filter(task =>
        task.slugTitle.toLowerCase().includes(searchSlug) ||
        task.description?.toLowerCase().includes(search.toLowerCase()) ||
        convertToSlug(task.authorUserId.fullname).includes(searchSlug) ||
        convertToSlug(task.assigneeUserId?.fullname)?.includes(searchSlug) ||
        convertToSlug(task.tags)?.includes(searchSlug) ||
        task.priority.toLowerCase().includes(search.toLocaleLowerCase()) ||
        task.status.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setSearchResult(filteredTasks);
    }
  }, [search, tasks]);

  return (
    <HomeLayout>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        type="create"
        projectId={id}
      />

      <ProjectHeader setSearch={setSearch} searchValue={search} activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab == "Board" && <ViewBoardProject data={searchResult} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}
      {activeTab == "List" && <ListProject data={searchResult} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}
      {activeTab == "Table" && <TableProject data={searchResult} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}
      {activeTab == "Timeline" && <TimelineProject data={searchResult} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>}

    </HomeLayout>
  )
}

export default Project
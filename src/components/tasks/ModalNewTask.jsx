import React, { useState } from 'react'
import Modal from '../Modal';
import Input from '../inputs/Input';
import InputSubTask from '../inputs/InputSubTask';
import ProfilePictureSelect from '../inputs/ProfilePictureSelect';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../../redux/tasks/taskSlice';

const ModalNewTask = ({isOpen, onClose, type, data, projectId}) => {

  const dataTasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [status, setStatus] = useState(data?.status || "");
  const [priority, setPriority] = useState(data?.priority || "");
  const [tags, setTags] = useState(data?.tags || "");
  const [startDate, setStartDate] = useState(data?.startDate.split("T")[0] || "");
  const [dueDate, setDueDate] = useState(data?.dueDate.split("T")[0] || "");
  const [assigneeUserId, setAssigneeUserId] = useState(data?.assigneeUserId || []);
  const [listSubTask, setListSubTask] = useState(data?.sub_tasks || []);
  
  const [profilePic, setProfilePic] = useState(data?.imageTask || null);

  const isFormValid = () => {
    return title
  }

  const selectStyles = "block w-full rounded border border-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";


  const handleFormKeyDown = (e) => {
    if(e.key == "Enter")
    {
      e.preventDefault();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(type == "create")
    {
      try {
        const response = await axiosInstance.post(API_PATHS.TASK.CREATE, {
          title, description, status, priority, tags, startDate, sub_tasks: listSubTask, dueDate, projectId
        });

        onClose();

        dispatch(addTask(response.data.task))

        setTitle("");
        setDescription("");
        setStatus("");
        setPriority("");
        setTags("");
        setStartDate("");
        setDueDate("");
        setAssigneeUserId("");
        setListSubTask([]);
        setProfilePic(null);

      } catch (error) {
        console.log(error);
      }
    }
    else
    {
      try {
        const response = await axiosInstance.patch(API_PATHS.TASK.UPDATE_TASK(data?._id), {
          title, description, status, priority, tags, startDate, sub_tasks: listSubTask, dueDate, projectId
        });
  
        onClose();
  
        dispatch(updateTask(response.data.task));
      } catch (error) {
        console.log(error);
      }
    }

  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={type == "create" ? "Create New Task" : `Edit Task ${data.title.toUpperCase()}`}>
      <form className='mt-4' onKeyDown={handleFormKeyDown} onSubmit={handleSubmit}>

        <div className='mt-3'>
          <ProfilePictureSelect image={profilePic} setImage={setProfilePic}/>
        </div>

        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Task Title"
          id="title"
        />

        <div className='mt-3 flex flex-col'>
          <label htmlFor='description' className='text-slate-800 text-[14px] pl-1 font-medium dark:text-white'>Description</label>
          <textarea
            rows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id='description'
            className='w-full px-4 pt-3 outline-none rounded-lg text-gray-900 text-sm mt-1 border dark:bg-dark-tertiary dark:text-white border-gray-100 dark:border-gray-600 overflow-y-auto custom-scrollbar'
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2 mt-3">
          <select
            className={selectStyles}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled={true}>Select Status</option>
            <option value={"To Do"}>To Do</option>
            <option value={"Work In Progress"}>Work In Progress</option>
            <option value={"Under Review"}>Under Review</option>
            <option value={"Completed"}>Completed</option>
          </select>

          <select
            className={selectStyles}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled>Select Priority</option>
            <option value={"Urgent"}>Urgent</option>
            <option value={"High"}>High</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Low"}>Low</option>
            <option value={"Backlog"}>Backlog</option>
          </select>
        </div>

        <Input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          id="tag"
          label="Tags"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            id="startDate"
            label="Start Date"
          />

          <Input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            id="dueDate"
            label="Due Date"
          />
        </div>

        <div className={`mt-5 mb-2 p-2 rounded-md border border-dashed border-gray-300 dark:border-slate-500`}>
          <p className=' text-gray-900 text-[14px] pl-1 font-medium dark:text-white'>List Sub Tasks</p>
          <InputSubTask listSubTask={listSubTask} setListSubTask={setListSubTask}/>
        </div>
        

        <Input
          type="text"
          placeholder="Assigned User ID"
          value={assigneeUserId}
          onChange={(e) => setAssigneeUserId(e.target.value)}
          id="assignee"
          label="Assignee"
        />

        <button
          type="submit"
          className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent 
            bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !isFormValid()? "cursor-not-allowed opacity-50" : ""}`}
          disabled={!isFormValid()}
        >
          {type == "create" ? "Create Task" : "Update"}
        </button>
      </form>
    </Modal>
  )
}

export default ModalNewTask
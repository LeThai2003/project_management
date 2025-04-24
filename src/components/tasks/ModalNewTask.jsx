import React, { useState } from 'react'
import Modal from '../Modal';
import Input from '../inputs/Input';

const ModalNewTask = ({isOpen, onClose}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [authorUserId, setAuthorUserId] = useState("");
  const [assigneeUserId, setAssigneeUserId] = useState("");
  const [projectId, setProjectId] = useState("");

  const isFormValid = () => {
    return title && authorUserId
  }

  const selectStyles = "block w-full rounded border border-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";



  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Task">
      <form className='mt-4 space-y-6' >
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
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id='description'
            className='w-full px-4 pt-3 outline-none rounded-lg text-gray-900 text-sm mt-1 border dark:bg-dark-tertiary dark:text-white border-gray-100 dark:border-gray-600'
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2 mb-0">
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
            onChange={(e) => setStatus(e.target.value)}
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

        <Input
          type="text"
          placeholder="Author User ID"
          value={authorUserId}
          onChange={(e) => setAuthorUserId(e.target.value)}
          id="author"
          label="Author"
        />

        <Input
          type="text"
          placeholder="Assigned User ID"
          value={assigneeUserId}
          onChange={(e) => setAssigneeUserId(e.target.value)}
          id="assignee"
          label="Assignee"
        />

        {1 === null && (
          <input
            type="text"
            placeholder="ProjectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            id="projectID"
            label="Project"
          />
        )}
        <button
          type="submit"
          className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent 
            bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !isFormValid()? "cursor-not-allowed opacity-50" : ""}`}
          disabled={!isFormValid()}
        >
          Create Task
        </button>
      </form>
    </Modal>
  )
}

export default ModalNewTask
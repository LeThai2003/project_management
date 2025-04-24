import React, { useState } from 'react'
import Modal from '../Modal';
import Input from '../inputs/Input';

const ModalNewProject = ({isOpen, onClose}) => {

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isFormValid = () => {
    return projectName && description && startDate && endDate;
  };

  const closeModalAndClearFields = () => {
    onClose();
    setProjectName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModalAndClearFields} title="Create New Project">
      <form 
        className='mt-1 space-y-6'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit()
        }}
      >
        <Input 
          type='text'
          placeholder='Project Name'
          value={projectName}
          onChange={({target}) => setProjectName(target.value)}
          id="projectName"
          label="Project Name"
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            id='startDate'
            label="Start Date"
          />
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            id='endDate'
            label="End Date"
          />
        </div>
        <button type='submit' className={`focus-offset-2 mt-4 flex justify-center w-full rounded-md border border-transparent 
          bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none 
          ${!isFormValid() ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={!isFormValid()}
        >
          Create Project
        </button>
      </form>
    </Modal>
  )
}

export default ModalNewProject
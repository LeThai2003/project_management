import React, { useEffect, useState } from 'react'
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import moment from "moment";
import { LuMessageSquare } from 'react-icons/lu';
import Dropdown from '../../components/projects/Dropdown';
import { useParams } from 'react-router-dom';
import PriorityTag from '../../components/tasks/PriorityTag';


const dataTasks = [
  {
    "id": 1,
    "title": "Task 1",
    "description": "I've made a huge tiny mistake. Don't worry, these young beauties have been nowhere near the bananas. You don't want a hungry dove down your pants. Caw ca caw, caw ca caw, caw ca caw, caw ca caw. I'm in Vegas this week and would like to point out the Blue Man Group is *actually* hiring. The support group? Oh, like when they say 'poofter' to mean 'tourist', yes.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Design",
    "startDate": "2023-01-10T00:00:00Z",
    "dueDate": "2023-04-10T00:00:00Z",
    "imageTask": "https://www.studytienganh.vn/upload/2021/06/105234.jpg",
    "projectId": 1,
    "authorUserId": 1,
    "assignedUserId": 2
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Implement the navigation algorithm.",
    "status": "To Do",
    "priority": "High",
    "tags": "Coding",
    "startDate": "2023-01-15T00:00:00Z",
    "dueDate": "2023-05-15T00:00:00Z",
    "projectId": 1,
    "authorUserId": 3,
    "assignedUserId": 4
  },
  {
    "id": 3,
    "title": "Task 3",
    "description": "Develop renewable energy solutions.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Development",
    "startDate": "2023-03-20T00:00:00Z",
    "dueDate": "2023-09-20T00:00:00Z",
    "imageTask": "https://www.cflowapps.com/wp-content/uploads/2021/12/diffnce_job_task_process.jpeg",
    "projectId": 1,
    "authorUserId": 5,
    "assignedUserId": 6
  },
  {
    "id": 4,
    "title": "Task 4",
    "description": "Outline new software development workflows.",
    "status": "To Do",
    "priority": "High",
    "tags": "Planning",
    "startDate": "2023-01-25T00:00:00Z",
    "dueDate": "2023-06-25T00:00:00Z",
    "projectId": 1,
    "authorUserId": 7,
    "assignedUserId": 8
  },
  {
    "id": 5,
    "title": "Task 5",
    "description": "Research AI models for prediction.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Research",
    "startDate": "2023-04-20T00:00:00Z",
    "dueDate": "2023-10-20T00:00:00Z",
    "projectId": 1,
    "comments": 2,
    "authorUserId": 9,
    "assignedUserId": 10
  },
  {
    "id": 6,
    "title": "Task 6",
    "description": "Biotech product testing.",
    "status": "To Do",
    "priority": "Backlog",
    "tags": "Testing",
    "startDate": "2023-03-01T00:00:00Z",
    "dueDate": "2023-08-01T00:00:00Z",
    "projectId": 1,
    "authorUserId": 11,
    "assignedUserId": 12
  },
  {
    "id": 7,
    "title": "Task 7",
    "description": "AI optimization for golf equipment.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Optimization",
    "startDate": "2023-05-15T00:00:00Z",
    "dueDate": "2023-11-15T00:00:00Z",
    "projectId": 1,
    "comments": 1,
    "authorUserId": 13,
    "assignedUserId": 14
  },
  {
    "id": 8,
    "title": "Task 8",
    "description": "Overhaul of the database for hotel management.",
    "status": "Under Review",
    "priority": "High",
    "tags": "Database",
    "startDate": "2023-04-01T00:00:00Z",
    "dueDate": "2023-10-01T00:00:00Z",
    "projectId": 1,
    "authorUserId": 15,
    "assignedUserId": 16
  },
  {
    "id": 9,
    "title": "Task 9",
    "description": "Upgrade telecom infrastructure.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Infrastructure",
    "startDate": "2023-06-10T00:00:00Z",
    "dueDate": "2023-12-10T00:00:00Z",
    "projectId": 1,
    "comments": 3,
    "authorUserId": 17,
    "assignedUserId": 18
  },
  {
    "id": 10,
    "title": "Task 10",
    "description": "Enhance security protocols.",
    "status": "Completed",
    "priority": "Urgent",
    "tags": "Security",
    "startDate": "2023-07-05T00:00:00Z",
    "dueDate": "2024-01-05T00:00:00Z",
    "projectId": 1,
    "authorUserId": 19,
    "assignedUserId": 20
  },
]

const ViewBoardProject = ({setIsModalNewTaskOpen}) => {


  // const [datas, setDatas] = useState(dataTasks);
  const [datas, setDatas] = useState(() => dataTasks.map(task => ({ ...task })));


  const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

  const updateTaskStatus = (taskId, toStatus) => {
  }

  const moveTask = (taskId, toStatus) => {
    // updateTaskStatus({taskId, status: toStatus})
    console.log(taskId, toStatus);
    // const updateDatas = datas?.map(item => item.id === taskId ? {...item, status: toStatus} : item);
    const updateDatas = datas.map(item => {
      if (item.id == taskId) {
        console.log("Before:", item.status, " After:", toStatus);
        return { ...item, status: toStatus };
      }
      return item;
    });
    console.log(updateDatas);
    setDatas(updateDatas);
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4'>
        {taskStatus.map((status) => (
          <TaskColumn 
            key={status}
            status={status}
            tasks={datas || []}
            moveTask={moveTask}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        ))}
      </div>
    </DndProvider>
  )
}

export default ViewBoardProject


const TaskColumn = ({status, tasks, moveTask, setIsModalNewTaskOpen}) => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const tasksCount = tasks.filter((task) => task.status == status).length;

  const statusColor = {
    "To Do": "#2563EB",
    "Work In Progress": "#059669",
    "Under Review": "#D97706",
    "Completed": "#000000"
  }

  return(
    <div 
      ref={(instance) => {drop(instance)}}
      className={`py-4 px-2 rounded-lg  ${isOver ? "bg-blue-100 dark:text-neutral-900" : ""} `}
    >
      <div className='flex w-full mb-3'>
        <div className='w-2 rounded-l-lg' style={{background: statusColor[status]}}></div>
        <div className='flex items-center justify-between rounded-e-lg bg-white dark:bg-dark-secondary px-5 py-4 w-full'>
          <h3 className='flex items-center text-md font-semibold dark:text-white'>
            {status}{" "}
            <span
              className='ml-2 inline-block size-[1.5rem] rounded-full bg-gray-200 p-1 text-center text-sm leading-none dark:bg-dark-tertiary'
            >
              {tasksCount}
            </span>
          </h3>

          <div className='flex items-center'>
            <button className='flex items-center justify-center size-6 rounded hover:bg-gray-300 bg-gray-200 dark:bg-dark-tertiary dark:hover:bg-opacity-80 dark:text-white'
              onClick={() => {setIsModalNewTaskOpen(true)}}
            >
              <FaPlus size={16}/>
            </button>
          </div>
        </div>
      </div>
      {tasks.filter(task => task.status == status).map(task => (<Task key={task.id} task={task}/>))}
    </div>
  )
}


const Task = ({task}) => {


  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const taskTagsSplit =task.tags ? task.tags?.split(",") : [];

  const formattedStartDate = task.startDate ? moment(new Date(task.startDate)).format("DD/MM/yyyy"): "";
  const formattedDueDate = task.dueDate ? moment(new Date(task.dueDate)).format("DD/MM/yyyy"): "";

  const numberOfComments = task?.comments || 0;


  const [openDropdownTaskId, setOpenDropdownTaskId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-task')) {
        setOpenDropdownTaskId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return(
    <div 
      ref={(instance) => {drag(instance)}}
      className={`mb-4 rounded-md bg-white shadow dark:bg-dark-secondary ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {task?.imageTask && (
        <img
          src={task.imageTask}
          alt="image task"
          width={400}
          height={200}
          className="h-auto w-full rounded-t-md"
        />
      )}

      <div className='p-4'>

        <div className='flex items-center justify-between'>
          <div className='flex flex-1 flex-wrap items-center gap-2'>
              {task.priority && <PriorityTag priority={task.priority}/>}
              <div className='flex gap-2'>
                {taskTagsSplit.map((tag) => (
                  <div key={tag} className='rounded-full bg-blue-100 px-2 py-1 text-xs font-medium'>
                    {" "}{tag}
                  </div>
                ))}
              </div>
          </div>

          <div className='relative dropdown-task'>
            <button 
              className='flex size-6 items-center justify-center dark:text-neutral-300'
              onClick={() => setOpenDropdownTaskId(openDropdownTaskId == task.id ? null : task.id)}
            >
              <FaEllipsisVertical size={16}/>
            </button>

            {openDropdownTaskId == task.id && 
              <div className='absolute top-6 right-1'>
                <Dropdown taskId={task.id} userId={1} authorId={task.authorUserId} assignId={task.assignedUserId}/>
              </div>
            }
          </div>
        </div>
        
        <div className='my-2'>
          <h4 className='text-sm font-semibold dark:text-white'>{task.title}</h4>
        </div>

        <p className='font-medium text-xs text-gray-700 dark:text-neutral-500 line-clamp-3'>
          {task.description}
        </p>
        
        <div className='mt-2 flex items-center justify-between text-xs text-gray-600 dark:text-neutral-500'>
          {formattedStartDate && <span className='font-medium'><strong>Start date:</strong> {formattedStartDate}</span>}
          {/* {formattedStartDate && formattedDueDate && <span> - </span>} */}
          {formattedDueDate && <span className='font-medium'><strong>Due date:</strong> {formattedDueDate}</span>}
        </div>

        <div className='mt-4 border-t border-gray-200 dark:border-stroke-dark'></div>

        <div className='flex items-center justify-between mt-3 '>
          <div className='flex -space-x-[7px] overflow-hidden'>
            {task.authorUserId && (
              <img
                src='https://enlink.themenate.net/assets/images/avatars/thumb-3.jpg'
                alt='image author'
                width={30}
                height={30}
                className='size-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary'
              />
            )}
            {task.assignedUserId && (
              <img
                src='https://enlink.themenate.net/assets/images/avatars/thumb-4.jpg'
                alt='image assignee'
                width={30}
                height={30}
                className='size-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary'
              />
            )}
          </div>

          <div className='flex items-center justify-center text-gray-500 dark:text-neutral-500'>
            <LuMessageSquare className='-mb-[3px]' size={16}/>
            <span className='ml-1 text-sm dark:text-neutral-400'>{numberOfComments}</span>
          </div>

        </div>

      </div>

    </div>
  )

}
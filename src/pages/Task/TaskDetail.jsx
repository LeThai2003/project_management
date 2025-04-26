import React, { useState } from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import PriorityTag from '../../components/tasks/PriorityTag';
import moment from 'moment';
import { getNameInitials } from '../../utils/helper';
import { FaCheck } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { ImAttachment } from "react-icons/im";
import { AiOutlineMessage } from "react-icons/ai";
import TabButton from '../../components/tabButtons/TabButton';
import ListSubTask from '../../components/tasks/ListSubTask';
import Comment from '../../components/tasks/Comment';

const TaskDetail = () => {

  const {id} = useParams();
  // console.log(id); 


  // gia su query ra co ket qua sau
  const taskDetail = {
    "id": 1,
    "title": "Task 1",
    "description": "I've made a huge tiny mistake. Don't worry, these young beauties have been nowhere near the bananas. You don't want a hungry dove down your pants. Caw ca caw, caw ca caw, caw ca caw, caw ca caw. I'm in Vegas this week and would like to point out the Blue Man Group is *actually* hiring. The support group? Oh, like when they say 'poofter' to mean 'tourist', yes.",
    "status": "Work In Progress",
    "priority": "Urgent",
    "tags": "Design",
    "startDate": "2023-01-10T00:00:00Z",
    "dueDate": "2023-04-10T00:00:00Z",
    "imageTask": "https://www.studytienganh.vn/upload/2021/06/105234.jpg",
    "projectId": 1,  // lay them ten du an 
    "authorUserId": 1,   // sau nay phai co thong tin: anh, ten,... 
    "assignedUserId": 2,  // tuong tu: anh, ten,...
    "sub_tasks": [
      {
        "sub_task_id": "1-1",
        "sub_title": "Irish skinny, grinder affogato",
        "isChecked": false
      },
      {
        "sub_task_id": "1-2",
        "sub_title": "Let us wax poetic about the beauty of the cheeseburger",
        "isChecked": false
      },
      {
        "sub_task_id": "1-3",
        "sub_title": "Efficiently unleash cross-media information",
        "isChecked": false
      },
      {
        "sub_task_id": "1-4",
        "sub_title": "Here's the story of a man named Brady",
        "isChecked": false
      },
      {
        "sub_task_id": "1-5",
        "sub_title": "Bugger bag egg's old boy willy jolly",
        "isChecked": false
      },
    ]
  }

  const [activeTab, setActiveTab] = useState(`Tasks (${taskDetail.sub_tasks.length})`);

  const navigate = useNavigate();

  const formattedStartDate = taskDetail.startDate ? moment(new Date(taskDetail.startDate)).format("DD/MM/yyyy"): "No Set";
  const formattedDueDate = taskDetail.dueDate ? moment(new Date(taskDetail.dueDate)).format("DD/MM/yyyy"): "No Set";

  return (
    <HomeLayout>
      <div className='relative mb-2'>
        <div 
          onClick={() => navigate(`/project/${taskDetail.projectId}`)}
          className='absolute top-0 left-1 flex items-center justify-center gap-2 px-3 py-1 rounded text-sm font-medium text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-dark-tertiary cursor-pointer transition-all duration-200'
        >
          <IoIosArrowBack className='size-4'/>
          <p>Back To Project: <span className='font-bold'>Apollo</span></p>
        </div>

        <div className='flex flex-col md:flex-row gap-3'>

          <div className='flex-1 md:flex-[2] bg-white dark:bg-dark-secondary dark:text-gray-200 relative top-[40px] min-h-[calc(100vh-140px)] mx-2 px-4 py-4 rounded-md shadow-sm'>

            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-start gap-3'>
                { 
                  taskDetail.imageTask && 
                  <img 
                    src={taskDetail.imageTask} 
                    alt="image task"
                    className='w-40 h-20 md:w-24 md:h-14 lg:w-40 lg:h-20  border-gray-200 dark:border-gray-600 object-cover'
                  />
                }
                <h3 className='text-gray-800 dark:text-gray-100 text-xl md:text-lg lg:text-xl font-medium'>{taskDetail.title}</h3>
              </div>

              <div className='flex items-center justify-end gap-3'>
                <PriorityTag priority={taskDetail.priority}/>
                <StatusTag status={taskDetail.status}/>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className=' font-medium text-gray-700 dark:text-gray-200 tracking-[0.2px]'>Description:</h3>
              <p className='text-sm font-normal text-gray-700 tracking-[0.2px] dark:text-gray-200 text-justify mt-1'>{taskDetail.description}</p>
            </div>

            <div className='mt-5 flex items-center justify-between'>
              <p className='text-sm font-medium text-gray-700 dark:text-gray-200 tracking-[0.2px]'>Start Date: <span className='text-green-700 text-sm font-medium'>{formattedStartDate}</span></p>
              <p className='text-sm font-medium text-gray-700 dark:text-gray-200 tracking-[0.2px]'>End Date: <span className='text-red-700 text-sm font-medium'>{formattedDueDate}</span></p>
            </div>

            <div className='mt-5 flex items-center justify-between'>
              <div className='flex items-center justify-start gap-2'>
                <p className='font-medium text-gray-700 dark:text-gray-200 tracking-[0.2px] text-sm'>Creator: <span className='text-slate-600 dark:text-slate-400'>Nguyễn Văn An</span></p>
                <div className='border border-gray-200 rounded-full'>
                  <img
                    src='https://enlink.themenate.net/assets/images/avatars/thumb-4.jpg'
                    alt='image assignee'
                    width={30}
                    height={30}
                    className='size-8 rounded-full object-cover dark:border-dark-secondary'
                  />
                </div>
              </div>
              <div className='flex items-center justify-start gap-2'>
                <p className='font-medium text-gray-700 dark:text-gray-200 tracking-[0.2px] text-sm'>Assignee: <span className='text-slate-600 dark:text-slate-400'>Phạm Thị Lý</span></p>
                <div className='size-8 text-sm font-medium text-green-800 dark:text-gray-200 bg-green-50 dark:bg-slate-700 rounded-full flex items-center justify-center border border-green-200 dark:border-gray-200'>
                  {getNameInitials("Phạm Thị Lý")}  
                </div>
              </div>
            </div>

            {/* tab */}
            <div className='mt-5 flex items-center justify-start gap-4 border-b border-gray-200 dark:border-gray-600 pb-2'>
              <TabButton name={`Tasks (${taskDetail.sub_tasks.length})`} activeTab={activeTab} setActiveTab={setActiveTab}/>
              <TabButton name={`Comments`} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>

            {activeTab == `Tasks (${taskDetail.sub_tasks.length})` && <ListSubTask listSubTasks={taskDetail.sub_tasks}/>}
            {activeTab == `Comments` && <Comment/>}

                  
          </div>

          <div className='flex-1 md:flex-1 bg-white dark:bg-dark-secondary dark:text-gray-200 relative top-[40px] min-h-[calc(100vh-140px)] mx-2 py-4 rounded-md shadow-sm'>
            <h2 className="text-lg font-semibold mb-6 px-4">Activities</h2>

            <div className='w-full h-[0.5px] bg-gray-200 dark:bg-gray-600'></div>
            
            <ul className='px-4 py-4'>
              <li className='relative mb-3'>
                <div className='flex flex-col ml-9 pb-4'>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='border border-gray-200 rounded-full'>
                      <img
                        src='https://enlink.themenate.net/assets/images/avatars/thumb-4.jpg'
                        alt='image assignee'
                        width={30}
                        height={30}
                        className='size-10 rounded-full object-cover dark:border-dark-secondary'
                      />
                    </div>
                    <div className='flex flex-col justify-start'>
                      <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Nguyễn Văn An</p>
                      <p className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>
                        <LuClock className='size-4 -mb-[6px]'/>
                        <span className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>10:44 PM</span>
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-row items-center gap-2 ml-4 mt-3'>
                    <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Complete task</p>
                    <p className='  text-gray-500 dark:text-gray-400 text-sm'>Prototype Design</p>
                  </div>
                </div>
                <div className='absolute top-4 left-2 border-l-[2px] border-dashed border-[#ececec] dark:border-gray-500 h-full'></div>

                <div className='absolute top-3 -left-[0.34rem] w-7 h-7 rounded-full bg-green-50 dark:bg-slate-800 dark:text-gray-200 text-green-600 flex items-center justify-center'><FaCheck className='size-3'/></div>
              </li>

              <li className='relative mb-3'>
                <div className='flex flex-col ml-9 pb-4'>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='border border-gray-200 rounded-full'>
                      <img
                        src='https://enlink.themenate.net/assets/images/avatars/thumb-3.jpg'
                        alt='image assignee'
                        width={30}
                        height={30}
                        className='size-10 rounded-full object-cover dark:border-dark-secondary'
                      />
                    </div>
                    <div className='flex flex-col justify-start'>
                      <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Phạm Thị Lý</p>
                      <p className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>
                        <LuClock className='size-4 -mb-[6px]'/>
                        <span className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>08:44 PM</span>
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-row items-center gap-2 ml-4 mt-3'>
                    <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Attached file</p>
                    <p className='  text-gray-500 dark:text-gray-400 text-sm'>Mockup Zip</p>
                  </div>
                </div>
                <div className='absolute top-4 left-2 border-l-[2px] border-dashed border-[#ececec] dark:border-gray-500 h-full'></div>

                <div className='absolute top-3 -left-[0.34rem] w-7 h-7 rounded-full bg-blue-50 dark:bg-slate-800 dark:text-gray-200 text-blue-600 flex items-center justify-center'><ImAttachment className='size-3'/></div>
              </li>

              <li className='relative mb-3'>
                <div className='flex flex-col ml-9 pb-4'>
                  <div className='flex items-center justify-start gap-2'>

                    <div className='border border-gray-200 rounded-full'>
                      <img
                        src='https://enlink.themenate.net/assets/images/avatars/thumb-3.jpg'
                        alt='image assignee'
                        width={30}
                        height={30}
                        className='size-10 rounded-full object-cover dark:border-dark-secondary'
                      />
                    </div>

                    <div className='flex flex-col justify-start'>
                      <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Phạm Thị Lý</p>
                      <p className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>
                        <LuClock className='size-4 -mb-[6px]'/>
                        <span className='flex items-center justify-start gap-2 mt-1 text-gray-500 dark:text-gray-400 text-sm'>08:44 PM</span>
                      </p>
                    </div>

                  </div>

                  <div className='flex flex-wrap gap-2 ml-4 mt-3'>
                    <p className='text-sm text-gray-800 font-medium dark:text-gray-200'>Commented</p>
                    <p className='  text-gray-500 dark:text-gray-400 text-sm'>'This is not our work!'</p>
                  </div>
                </div>

                {/* <div className='absolute top-4 left-2 border-l-[2px] border-dashed border-[#ececec] dark:border-gray-500 h-full last:hidden'></div> */}

                {false && (
                  <div className="absolute top-4 left-2 border-l-[2px] border-dashed border-[#ececec] dark:border-gray-500 h-full"></div>
                )}

                <div className='absolute top-3 -left-[0.34rem] w-7 h-7 rounded-full bg-purple-50 dark:bg-slate-800 dark:text-gray-200 text-purple-600 flex items-center justify-center'><AiOutlineMessage className='size-3'/></div>
              </li>
            </ul>
            

          </div>

        </div>

      </div>
    </HomeLayout>
  )
}

export default TaskDetail


const StatusTag = ({ status }) => {
  const tagClassName = `rounded-full px-2 py-1 text-xs font-semibold ${
    status === "To Do"
      ? "bg-blue-200 text-blue-700"
        : status === "Work In Progress"
          ? "bg-green-200 text-green-700"
            : status === "Under Review"
              ? "bg-orange-200 text-orange-700"
                : status === "Completed"
                  ? "bg-dark-tertiary text-white"
                    : "bg-gray-200 text-gray-700"
  }`;
  return <div className={tagClassName}>{status}</div>;
}
import React from 'react'
import SideMenu from '../sidemenu/SideMenu'
import Navbar from '../navbar/Navbar'

const HomeLayout = ({children}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      
      <SideMenu/>

      <main className='flex flex-col w-full bg-gray-50 md:pl-[224px]'>

        <Navbar/>

        {children}

      </main>

    </div>
  )
}

export default HomeLayout
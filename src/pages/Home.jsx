import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardUser from '../components/dashboard/DashboadUser'


const Home = () => {
  return (
    <>
    <DashboardUser>
        <Outlet/>
    </DashboardUser>
    </>
  )
}

export default Home
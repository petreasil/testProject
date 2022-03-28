import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardUser from '../components/DashboardUser/DashboadUser'


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
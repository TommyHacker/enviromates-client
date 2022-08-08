import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Map } from '../components'


export default function Layout() {

  return (
    <div>
        <NavBar />
        <Map />
        <Outlet />
    </div>
  )
  
}

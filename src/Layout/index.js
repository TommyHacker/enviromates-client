import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Background } from '../components'


export default function Layout() {

  return (
    <div>
      <NavBar />
         <Background/> 
      <Outlet />
    </div>
  )
  
}

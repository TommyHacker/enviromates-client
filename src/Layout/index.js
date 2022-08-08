import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Map, Coordinates } from '../components'


export default function Layout() {
  return (
    <div>
        <NavBar />
        {/* <Coordinates/> */}
        <Map />
        <Outlet />
    </div>

  )
}

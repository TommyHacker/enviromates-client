import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

export default function Layout() {
  return (
    <div>
        <NavBar />
          <Outlet />
    </div>

  )
}

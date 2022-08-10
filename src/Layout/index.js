import React from 'react'
import { Outlet } from 'react-router-dom'
import { Background} from '../components'

export default function Layout() {

  return (
    <div>
      {/* <Navigation /> */}
        <Background/> 
      <Outlet />
    </div>
  ) 
}

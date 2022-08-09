import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/images/logo.png'
import './index.css'

export default function Home() {
  return (
    <>
      <div className='box'>
         <img className='main-logo' src={logo} alt="logo"></img>
       </div>
    </>
  )
}


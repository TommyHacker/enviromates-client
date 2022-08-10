import React from 'react'
import background from '../../assets/images/background-test.png'
import './index.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


export default function Background() {
    return (
      <>
        <Container style={{margin: '0', padding: '0', width: '100%'}}>
           <Image fluid className='background' src={background} alt="background"></Image>
         </Container>
      </>
    )
  }
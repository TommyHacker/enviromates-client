import React from 'react'
import background from '../../assets/images/background-test.png';
import backgroundHorizontal from '../../assets/images/background-horizontal.png'
import './index.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { motion } from 'framer-motion'
import Navigation from '../Navigation'
import { useMediaQuery } from 'react-responsive'

export default function Background() {
  
  // Background responsiveness
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1025px)' })

    return (
      <>
          <Navigation />

            {isDesktopOrLaptop && <div className='backgroundHorizontal'> <Image style={{margin: 'auto', padding: '0', width: '100vw'}} src={backgroundHorizontal} alt="background"/>
            </div>}

            {isTabletOrMobile &&  
            <motion.div className='background'
              initial={{ translateY: 140}}
              animate={{translateY:950}}
              transition={{ duration: 20}}>
              <Image fluid src={background} alt="background"/>
              </motion.div>}  
         
      </>
    )
  }

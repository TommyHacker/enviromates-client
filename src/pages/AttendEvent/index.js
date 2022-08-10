import React from 'react';
import { MapStatic } from '../../components'
import { motion } from 'framer-motion'

export default function AttendEvent() {
  return (

    <motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 1.5}}
			exit={{opacity: 0}}
			style={{marginTop:'20vh', height:'100%'}}
			>
      <Button variant="info">Attend Event</Button>{' '}

      <MapStatic/>
    </motion.div>
    
  )
}



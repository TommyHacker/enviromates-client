import React from 'react'
import { motion } from 'framer-motion'

export default function CompletedEvent() {
  return (
    <motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 1.5}}
			exit={{opacity: 0}}
			style={{ margin: 'auto', height:'100%'}}
			>
        <h1> Completed Page</h1>
      </motion.div>
  )
}


import React from 'react'
import { motion } from "framer-motion"


export default function Scale() {
  return (
    <motion.div
    style={{height : 100, width : 100, backgroundColor : "pink"}}
    animate={{ scale: 2 }}
    transition={{ duration: 1.5 }}
  />
  )
}
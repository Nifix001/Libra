import { motion } from "framer-motion"

export default function WhatWeDo(props) {
  return (
    <div>
      <div className="services-1">
            <motion.img src={props.image} alt="" 
            initial={{ y:0 }}
            animate={{ y: -10 }}
            transition={{ delay: 3, type:'spring', stiffness: 500 }}
            />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

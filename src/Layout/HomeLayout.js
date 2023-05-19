import { NavLink, Outlet } from "react-router-dom";
import rec3 from "../images/Rectangle 3.png"
import { motion } from "framer-motion"

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <div className="home-layout1">
      <div>
      <motion.h1
      initial={{ opacity: 0, x:-200 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 1, delay: 2 }}
      >Studying books, <br /> a long lasting way <br /> to changing lives</motion.h1>
      <motion.p
      initial={{ opacity: 0, x:-200 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 2.5, delay: 2}}
      >We relieve you a great deal by sourcing <br /> books for you to lend, read, and change <br /> your lives. We are always ready to help</motion.p>
      <motion.div className="nvl"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 4, delay: 3 }}
      >
      <motion.div
      whileHover={{ scale:1.1 }}
      transition={{ type:'spring', stifness: 200, duration: 2 }}
      ><NavLink to="Learn" >Learn More</NavLink></motion.div>
      <motion.div
      whileHover={{ scale:1.1 }}
      transition={{ type:'spring', stifness: 200, duration: 2 }}
      ><NavLink to="contact">Contact Us</NavLink></motion.div>
      </motion.div>
      </div>
      <motion.img src={rec3} alt="reading girl" 
      initial={{ opacity: 0, x:200 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 2, delay: 2 }}
      />
      </div>
    
      


      <Outlet />
    </div>
  )
}

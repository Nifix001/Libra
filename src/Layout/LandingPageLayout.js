import { NavLink, Outlet } from "react-router-dom";
import img1 from "../images/Frame.png";
import { motion } from "framer-motion"

export default function LandingPageLayout() {
  return (
    <div className="landing">
      <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img src={img1} alt="logo" />
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="settings">
                <select name="" id="">
                <option value="">Settings</option>
                </select>
                </NavLink>
            <NavLink to="help">Help</NavLink>
        </nav>
        <div className="side-bar">
            <motion.div
            whileHover={{ scale:1.1 }}
            transition={{ type:'spring', stifness: 300, duration: 2 }}
            ><NavLink to="sign-up" >Sign Up</NavLink></motion.div>
            <motion.div
            whileHover={{ scale:1.1 }}
            transition={{ type:'spring', stifness: 300, duration: 2 }}
            ><NavLink to="login" >Login</NavLink></motion.div>
        </div>
      </motion.header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

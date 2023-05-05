import { NavLink, Outlet } from "react-router-dom";
import img1 from "../images/Frame.png";
import { motion } from "framer-motion"

export default function LandingPageLayout() {
  return (
    <div className="landing">
      <header>
        <motion.img src={img1} alt="logo" 
        initial={{ opacity: 0 }}
        animate={{ y: [0, -200, 0, -200], opacity: 1 }}
        transition={{  type: 'spring', duration: 0.5, delay: 2 }}
        />
        <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        >
            <NavLink to="/">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="settings">
                <select name="" id="">
                <option value="">Settings</option>
                </select>
                </NavLink>
            <NavLink to="help">Help</NavLink>
        </motion.nav>
        <motion.div className="side-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        >
            <NavLink to="sign-up">Sign Up</NavLink>
            <NavLink to="login" >Login</NavLink>
        </motion.div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

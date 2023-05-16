import { NavLink, Outlet } from "react-router-dom";
import img1 from "../images/Frame.png";
import { motion } from "framer-motion"
import { useState } from "react";

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
        <motion.div className="side-bar">
            <NavLink to="sign-up" >Sign Up</NavLink>
            <NavLink to="login" >Login</NavLink>
        </motion.div>
      </motion.header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

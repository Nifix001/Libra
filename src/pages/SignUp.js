import { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";
import fot1 from "../images/Google svg.png"
import fot2 from "../images/Facebook svg.png"
import fot3 from "../images/Twitter  svg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function SignUp( ) {
  const [userData, setUserData] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(userData.password === userData.confirmPassword) {
      alert("successfully signed up")
    } else {
      alert("enter correct password")
    }
  }

  return (
    <div className="bck" >
        <header>
            <img src={img1} alt="" />
        </header>
        <motion.div className="signup"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}}
        transition={{ duration: 1.2, delay: 1}}
        >
        <form className="form1" onSubmit={handleSubmit}>
          <header>
            <h2>SIGN UP</h2>
          </header>
          <label htmlFor="email">Email<br />
          <div className="awesome"><FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#AEADAE", fontSize:"20px"}}/></div> 
          <input 
          type="email" 
          placeholder="Enter E-mail" 
          name="email"
          value={userData.email}
          onChange={handleChange}
          id="email"
          required/><hr />
          </label><br /><br />
          <label htmlFor="pword">Password<br />
          <div className="awesome"><FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#AEADAE", fontSize:"20px"}}/><FontAwesomeIcon icon="fa-regular fa-eye" style={{color: "#AEADAE", fontSize:"20px"}}/></div> 
          <input 
          type="password" 
          placeholder="Enter Password"
          name="password" 
          value={userData.password}
          onChange={handleChange}
          id="pword"
          required/>
          <hr />
          </label><br /><br />
          <label htmlFor="confirm">Confirm Password<br />
          <div className="awesome"><FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#AEADAE", fontSize:"20px"}}/><FontAwesomeIcon icon="fa-regular fa-eye" style={{color: "#AEADAE", fontSize:"20px"}}/></div> 
          <input 
          type="password" 
          placeholder="Enter Password again"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange} 
          id="confirm"
          required/><hr />
          </label><br /><br />
          <motion.button
          whileHover={{ scale:1.1 }}
          transition={{ type:'spring', stifness: 300, duration: 2 }}
          >Sign Up</motion.button>
          <br />
        <div className="icons">
        <p>Or sign up using</p>
        <motion.div
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1,}}
        transition={{ duration: 1, delay: 0.8}}
        >
            <NavLink><img src={fot2} alt="" /></NavLink>
            <NavLink><img src={fot1} alt="" /></NavLink>
            <NavLink><img src={fot3} alt="" /></NavLink>
        </motion.div>
        </div>
        <p className="lastp">Already a member? <NavLink to="/login">Log In</NavLink></p>
        </form>
        </motion.div>
    </div>
  )
}

import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";
import { useState,useEffect } from "react";
import fot1 from "../images/Google svg.png"
import fot2 from "../images/Facebook svg.png"
import fot3 from "../images/Twitter  svg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function LogIn() {

  const [smallScreenSize, setSmallScreenSize] = useState(window.minWidth < 900);

  useEffect(() => {
    const handleResize = (e) => {
      e.preventDefault();
      setSmallScreenSize(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [userDetails, setUserDetails] = useState({
    email:"",
    password:"",
  })

  function handleChange(event) {
    const {name, value} = event.target
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(userDetails.email === userDetails.password) {
      alert("successfully logged in")
    } else {
      alert("enter correct password")
    }
  }

  return (
    <div >
      {smallScreenSize ? (
        <div className="error-message">
          <motion.p
           initial={{ opacity: 0, }}
           whileInView={{ opacity: 1, }}
           transition={{ duration: 1, delay: 0.5 }}
          >
            Screen size is currently unavailable,  We are working on it. 
          </motion.p>
          <motion.p
           initial={{ opacity: 0, }}
           whileInView={{ opacity: 1, }}
           transition={{ duration: 1, delay: 2.5 }}
          >
            Please resize your window.
          </motion.p>

        </div>
      ) : (
        <div className="bck">
        <header>
            <img src={img1} alt="" />
        </header>
        <motion.div className="signup"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}}
        transition={{ duration: 1.2, delay: 1}}
        >
        <form className="form" onSubmit={handleSubmit}>
        <header><h2>LOG IN</h2></header>
          <label htmlFor="email">Email<br /> 
          <div className="awesome2"><FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#AEADAE", fontSize:"20px"}}/></div> 
          <input 
          type="email" 
          placeholder="Enter E-mail"
          name="email"
          value={userDetails.email}
          onChange={handleChange} 
          id="email"
          required/><hr />
          </label><br />
          <label htmlFor="pword">Password<br />
          <div className="awesome2"><FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#AEADAE", fontSize:"20px"}}/><FontAwesomeIcon icon="fa-regular fa-eye" style={{color: "#AEADAE", fontSize:"20px"}}/></div>
          <input 
          type="password" 
          placeholder="Enter Password"
          name="password"
          value={userDetails.password}
          onChange={handleChange} 
          id="pword"
          required/><hr />
          </label>
          <span><NavLink>Forget Password?</NavLink></span><br /><br />
          <motion.button
          whileHover={{ scale:1.1 }}
          transition={{ type:'spring', stifness: 300, duration: 2 }}
          >Log in</motion.button>
          <br />
        <div className="icons">
        <p>Or log in using</p>
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
        <p className="lastp">New member? <NavLink to="/sign-up">Sign Up</NavLink></p>
        </form>
        </motion.div>
        </div>)}
    </div>
  )
}

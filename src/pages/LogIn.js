import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";
import { useState } from "react";
import fot1 from "../images/Google svg.png"
import fot2 from "../images/Facebook svg.png"
import fot3 from "../images/Twitter  svg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogIn() {
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
    <div className="bck">
        <header>
            <img src={img1} alt="" />
        </header>
        <div className="signup">
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
          <button>Log in</button>
          <br />
        <div className="icons">
        <p>Or log in using</p>
        <div>
            <NavLink><img src={fot2} alt="" /></NavLink>
            <NavLink><img src={fot1} alt="" /></NavLink>
            <NavLink><img src={fot3} alt="" /></NavLink>
        </div>
        </div>
        <p className="lastp">New member? <NavLink to="/sign-up">Sign Up</NavLink></p>
        </form>
        
        </div>
        
    </div>
  )
}

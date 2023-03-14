import { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";
import fot1 from "../images/Google svg.png"
import fot2 from "../images/Facebook svg.png"
import fot3 from "../images/Twitter  svg.png"

export default function SignUp() {
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
    <div className="bck">
        <header>
            <img src={img1} alt="" />
        </header>
        <div className="signup">
        <form className="form1" onSubmit={handleSubmit}>
          <header>
            <h2>SIGN UP</h2>
          </header>
          <label htmlFor="email">Email<br />
          <input 
          type="email" 
          placeholder="Enter E-mail" 
          name="email"
          value={userData.email}
          onChange={handleChange}
          id="email"
          required/><hr />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input 
          type="password" 
          placeholder="Enter Password"
          name="password" 
          value={userData.password}
          onChange={handleChange}
          id="pword"
          required/><hr />
          </label><br />
          <label htmlFor="confirm">Confirm Password<br />
          <input 
          type="password" 
          placeholder="Enter Password again"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange} 
          id="confirm"
          required/><hr />
          </label><br />
          <button>Sign Up</button>
          <br />
        <div className="icons">
        <p>Or sign up using</p>
        <div>
            <NavLink><img src={fot2} alt="" /></NavLink>
            <NavLink><img src={fot1} alt="" /></NavLink>
            <NavLink><img src={fot3} alt="" /></NavLink>
        </div>
        </div>
        <p className="lastp">Already a member? <NavLink to="/login">Log In</NavLink></p>
        </form>
        </div>
        
    </div>
  )
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";

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

  return (
    <div className="bck">
        <header>
            <img src={img1} alt="" />
        </header>
        <div className="signup">
        <header>
        <h2>SIGN UP</h2>
        </header>
        <form action="">
          <label htmlFor="email">Email<br />
          <input 
          type="email" 
          placeholder="Enter E-mail" 
          name="email"
          value={userData.email}
          onChange={handleChange}
          id="email"/><br />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input 
          type="text" 
          placeholder="Enter Password"
          name="password" 
          value={userData.password}
          onChange={handleChange}
          id="pword"/><br />
          </label><br />
          <label htmlFor="confirm">Confirm Password<br />
          <input 
          type="text" 
          placeholder="Enter Password again"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange} 
          id="confirm"/><br />
          </label><br />
          <button>Sign Up</button>
        </form>
        <br />
        <div>
        <p>Or sign up using</p>
        <div>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
        </div>
        </div>
        <p>Already a member? <NavLink to="login">Login</NavLink></p>
        </div>
        
    </div>
  )
}

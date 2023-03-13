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
          id="email"/><hr />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input 
          type="text" 
          placeholder="Enter Password"
          name="password" 
          value={userData.password}
          onChange={handleChange}
          id="pword"/><hr />
          </label><br />
          <label htmlFor="confirm">Confirm Password<br />
          <input 
          type="text" 
          placeholder="Enter Password again"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange} 
          id="confirm"/><hr />
          </label><br />
          <button>Sign Up</button>
          <br />
        <div className="icons">
        <p>Or sign up using</p>
        <div>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
        </div>
        </div>
        <p>Already a member? <NavLink to="/login">Login</NavLink></p>
        </form>
        </div>
        
    </div>
  )
}

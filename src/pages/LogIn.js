import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";
import { useState } from "react";

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
          <input 
          type="email" 
          placeholder="Enter E-mail"
          name="email"
          value={userDetails.email}
          onChange={handleChange} 
          id="email"/><br />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input 
          type="text" 
          placeholder="Enter Password"
          name="password"
          value={userDetails.password}
          onChange={handleChange} 
          id="pword"/><br />
          </label><br />
          <button>Log in</button>
          <br />
        <div>
        <p>Or log in using</p>
        <div>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
        </div>
        </div>
        <p>New member <NavLink to="/sign-up">Sign Up</NavLink></p>
        </form>
        
        </div>
        
    </div>
  )
}

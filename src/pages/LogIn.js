import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";

export default function LogIn() {
  return (
    <div className="bck">
        <header>
            <img src={img1} alt="" />
        </header>
        <div className="signup">
        <header>
        <h2>LOG IN</h2>
        </header>
        <form action="">
          <label htmlFor="email">Email<br />
          <input type="email" placeholder="Enter E-mail" id="email"/><br />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input type="text" placeholder="Enter Password" id="pword"/><br />
          </label><br />
          <button>Log in</button>
        </form>
        <br />
        <div>
        <p>Or log in using</p>
        <div>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
        </div>
        </div>
        <p>New member <NavLink to="sign-up">Sign Up</NavLink></p>
        </div>
        
    </div>
  )
}

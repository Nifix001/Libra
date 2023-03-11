import { NavLink } from "react-router-dom";
import img1 from "../images/Frame.png";

export default function SignUp() {
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
          <input type="email" placeholder="Enter E-mail" id="email"/><br />
          </label><br />
          <label htmlFor="pword">Password<br />
          <input type="text" placeholder="Enter Password" id="pword"/><br />
          </label><br />
          <label htmlFor="confirm">Confirm Password<br />
          <input type="text" placeholder="Enter Password again" id="confirm"/><br />
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

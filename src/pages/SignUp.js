import { NavLink, Outlet } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
        <header>
        <h2>SIGN UP</h2>
        </header>
        <form action="">
          <label htmlFor="email">Email<br /><input type="email" placeholder="Enter E-mail" id="email"/></label>
          <label htmlFor="pword">Password<br /><input type="text" placeholder="Enter Password" id="pword"/></label>
          <label htmlFor="confirm">Confirm Password<br /><input type="text" placeholder="Enter Password again" id="confirm"/></label>
          <button>Sign Up</button>
        </form>
        <div>
        <p>Or sign up using</p>
        <div>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
        </div>
        </div>
        <p>Already a member? <NavLink>Login</NavLink></p>

        <Outlet />
    </div>
  )
}

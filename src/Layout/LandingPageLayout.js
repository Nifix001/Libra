import { NavLink, Outlet } from "react-router-dom";
import img1 from "../images/Frame.png";

export default function LandingPageLayout() {
  return (
    <div className="landing">
      <header>
        <img src={img1} alt="logo" />
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="settings">
                <select name="" id="">
                <option value="">Settings</option>
                </select>
                </NavLink>
            <NavLink to="help">Help</NavLink>
        </nav>
        <div className="side-bar">
            <NavLink to="sign-up">Sign Up</NavLink>
            <NavLink to="login" >Login</NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

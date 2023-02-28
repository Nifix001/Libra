import { NavLink, Outlet } from "react-router-dom";
import rec3 from "../images/Rectangle 3.png"
import vector from "../images/chevron-down.png"

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <div className="home-layout1">
      <div>
      <h1>Studying books, <br /> a long lasting way <br /> to changing lives</h1>
      <p>We relieve you a great deal by sourcing <br /> books for you to lend, read, and change <br /> your lives. We are always ready to help</p>
      <div className="nvl">
      <NavLink to="Learn" >Learn More</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
      </div>
      </div>
      <img src={rec3} alt="reading girl" />
      </div>
      <div className="arrow">
        <NavLink to="services" ><img src={vector} alt="arrow" /></NavLink>
        </div>


      <Outlet />
    </div>
  )
}

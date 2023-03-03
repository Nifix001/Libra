import { NavLink, } from "react-router-dom";
import fot from "../images/Rectangle 15.png"


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-a">
           <img src={fot} alt="" /> 
           <div className="footer-b">
            <h3>We dedicate time diligently to provide <br /> books for you <hr /></h3>
            <p>Read through our code of conduct and terms of agreement on borrowing of books</p>
            <button>Read</button>
           </div>
        </div>
        <div className="footer-c">
            <p>Contact us on:</p>
            <div className="socials">
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink><i></i></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            </div>
            <div>
             <NavLink>Libraread Group</NavLink>   
             <NavLink>Privacy Policy</NavLink>   
             <NavLink>Reviews</NavLink>   
             <NavLink>
              <select name="" id="">
              <option value="">EN</option>
              </select>
              </NavLink>   
             <NavLink>Terms and Agreement</NavLink>   
            </div>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minus possimus provident!<br /> Quod explicabo inventore in est vero impedit quo doloribus cumque maiores!</p>
        </div>
        
    </div>
  )
}

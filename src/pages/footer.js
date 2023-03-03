import { NavLink, } from "react-router-dom";
import fot from "../images/Rectangle 15.png"
import fot1 from "../images/Google svg.png"
import fot2 from "../images/Facebook svg.png"
import fot3 from "../images/Twitter  svg.png"


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-a">
           <img src={fot} alt="" /> 
           <div className="footer-b">
            <h3>We dedicate time diligently to provide <br /> books for you <hr /></h3>
            <p>Read through our code of conduct and terms of agreement on<br /> borrowing of books</p>
            <button>Read</button>
           </div>
        </div>
        <div className="footer-c">
            <p>Contact us on:</p>
            <div className="socials">
            <NavLink><img src={fot2} alt="" /> </NavLink>
            <NavLink><img src={fot1} alt="" /> </NavLink>
            <NavLink><img src={fot3} alt="" /> </NavLink>
            </div>
            <div className="footer-d">
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
            <div className="hr2">
            <hr />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minus possimus provident!<br /> Quod explicabo inventore in est vero impedit quo doloribus cumque maiores!</p>
        </div>
        
    </div>
  )
}

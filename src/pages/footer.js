import { NavLink, } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-a">
           <img src="" alt="" /> 
           <div>
            <h3>We dedicate time diligently to provide <br /> books for you <hr /></h3>
            <p>Read through our code of conduct and terms of agreement on borrowing of books</p>
            <button>Read</button>
           </div>
        </div>
        <div className="footer-b">
            <p>Contact us on:</p>
            <div className="socials">
            <NavLink><img src="" alt="facebook" /></NavLink>
            <NavLink><img src="" alt="google" /></NavLink>
            <NavLink><img src="" alt="twitter" /></NavLink>
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

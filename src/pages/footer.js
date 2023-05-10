import { Link, NavLink, } from "react-router-dom";
import fot from "../images/Rectangle 15.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <div className="footer">
        <motion.div className="footer-a"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8}}
        >
           <motion.img src={fot} alt=""
           initial={{ opacity: 0, x: -200 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 3, delay: 1.5}}
           /> 
           <motion.div className="footer-b"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 1.5}}
           >
            <h3>We dedicate time diligently to provide <br /> books for you <hr /></h3>
            <p>Read through our code of conduct and terms of agreement on<br /> borrowing of books</p>
            <button>Read</button>
           </motion.div>
        </motion.div>
        <motion.div className="footer-c"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1}}>
            <p>Contact us on:</p>
            <div className="socials">
            <Link to='/'><FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "white", fontSize:"50px"}} /></Link>
            <Link to='/'><FontAwesomeIcon icon="fa-brands fa-google" style={{color: "white", fontSize:"50px"}} /></Link>
            <Link to='/'><FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "white", fontSize:"50px"}} /></Link>
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
        </motion.div>
        
    </div>
  )
}

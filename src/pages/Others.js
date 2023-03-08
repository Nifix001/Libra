import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import ot1 from "../images/image 16.png";
import ot2 from "../images/image 14.png";
import ot3 from "../images/image 13.png";
import ot4 from "../images/image 12.png";
import ot5 from "../images/Ellipse 1.png";
import ot6 from "../images/Ellipse 2.png";
import ot7 from "../images/Ellipse 3.png";
import ot8 from "../images/Ellipse 4.png";
import DataO from "../database/DataO";
import DataR from "../database/DataR"
import Reviews from "../framework/Reviews";
import Trending from "../framework/Trending";

export default function Others() {
    const dataO = DataO.map(others => {
        return(
            <Trending
            key={others.id}
            image={others.image}
            title={others.title}
            author={others.author}
            button={others.button}
            />
        )
    })

    const dataR = DataR.map(reviews => {
        return (
            <Reviews 
            key={reviews.id}
            image={reviews.image}
            name={reviews.name}
            title={reviews.title}
            review={reviews.review}
            rating={reviews.rating}
            />
        )
    })
  return (
    <div>
        <div className="others">
            <h3>Other Books</h3>
            <div className="others-1">
                <div className="others-2">
                    <NavLink to="/">All<hr /></NavLink>
                    <select>
                        <option value="">Genre</option>
                    </select>
                </div>
                <div>
                <input type="text" placeholder="Search by name" />
                <i></i>
                </div>
            </div>
            <div className="trend">
                { dataO }
            </div>
            <div className="nav-btn">
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            </div>
      </div>
      <div className="reviews">
        <h3>Reviews and Ratings</h3>
            <div className="reviews-1">
                <div className="personal-reviews">
                    <div className="personal-details">
                        <img src={ot5} alt="" />
                        <div>
                            <h4>Karoline Red</h4>
                            <h5>Chef</h5>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptatem culpa iusto assumenda explicabo enim? Aliquam, a nisi! Ipsam accusantium est accusamus necessitatibus nobis optio, maiores libero repellendus totam nam.</p>
                        <i></i>
                </div>
                <div className="personal-reviews">
                    <div className="personal-details">
                        <img src={ot6} alt="" />
                        <div>
                            <h4>Collins Aloba</h4>
                            <h5>Teacher</h5>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptatem culpa iusto assumenda explicabo enim? Aliquam, a nisi! Ipsam accusantium est accusamus necessitatibus nobis optio, maiores libero repellendus totam nam.</p>
                        <i></i>
                </div>
                <div className="personal-reviews">
                    <div className="personal-details">
                        <img src={ot7} alt="" />
                        <div>
                            <h4>Alo Bosede</h4>
                            <h5>Forex Trader</h5>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptatem culpa iusto assumenda explicabo enim? Aliquam, a nisi! Ipsam accusantium est accusamus necessitatibus nobis optio, maiores libero repellendus totam nam.</p>
                        <i></i>
                </div>
                <div className="personal-reviews">
                    <div className="personal-details">
                        <img src={ot8} alt="" />
                        <div>
                            <h4>Bill Brown</h4>
                            <h5>Sales Manager</h5>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptatem culpa iusto assumenda explicabo enim? Aliquam, a nisi! Ipsam accusantium est accusamus necessitatibus nobis optio, maiores libero repellendus totam nam.</p>
                        <i></i>
                </div>
            </div>
            <div className="nav-btn">
                <NavLink><div></div></NavLink>
                <NavLink><div></div></NavLink>
                <NavLink><div></div></NavLink>
            </div>
            <div className="hr"> 
            <hr />
            <h4>Have reviews or ratings to about your favourite book? Enter it below.</h4>
            </div>
            <div className="input-reviews">
                <input type="text" />
                <button>Send</button>    
            </div>       

      </div>
      <NavLink to="footer" ><img src={vector} alt="arrow" /></NavLink>
      <Outlet />
    </div>
  )
}

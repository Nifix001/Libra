import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import DataO from "../database/DataO";
import DataR from "../database/DataR"
import Reviews from "../framework/Reviews";
import Trending from "../framework/Trending";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
            ratings={reviews.ratings}
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
                { dataR }
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

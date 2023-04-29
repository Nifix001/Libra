import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import DataO from "../database/DataO";
import DataR from "../database/DataR"
import Reviews from "../framework/Reviews";
import Trending from "../framework/Trending";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay, Navigation, Mousewheel } from "swiper";

export default function Others() {
    const dataO = DataO.map(others => {
        return(
        <SwiperSlide>
            <Trending
            key={others.id}
            image={others.image}
            title={others.title}
            author={others.author}
            button={others.button}
            />
            </SwiperSlide>
        )
    })

    const dataR = DataR.map(reviews => {
        return (
          <SwiperSlide>
            <Reviews 
            key={reviews.id}
            image={reviews.image}
            name={reviews.name}
            title={reviews.title}
            review={reviews.review}
            ratings={reviews.ratings}
            />
          </SwiperSlide>
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
            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, Mousewheel]}
              className="mySwiper"
            >
                { dataO }
            </Swiper>
            </div>
      <div className="reviews">
        <h3>Reviews and Ratings</h3>
            <div className="reviews-1">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              mousewheel={true}
              navigation={false}
              modules={[Autoplay, Navigation, Mousewheel]}
              className="mySwiper"
            >
                { dataR }
            </Swiper>
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

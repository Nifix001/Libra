import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import data from "../database/Data";
import DataW from "../database/DataW";
import WhatweDo from "../framework/WhatWeDo";
import Trending from "../framework/Trending";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay, Navigation } from "swiper";

export default function Services(props) {
    const whatWe = DataW.map(ourwork => {
        return(
            <WhatweDo 
            key={ourwork.id}
            image={ourwork.image}
            title={ourwork.title}
            content={ourwork.content}
            />
        )
    })

    const trending = data.map(library => {
        return(
            <SwiperSlide>
            <Trending 
            key={library.id}
            image={library.image}
            title={library.title}
            author={library.author}
            button={library.button}
            />
            </SwiperSlide>
        )
    })

  return (
    <div className="srv">
        <h3>What We Do</h3>
        <div className="services">
            { whatWe }
        </div>
        <div className="trends">
            <h3>Trending Books</h3>
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
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
                { trending }
                </Swiper>
            
            <div className="nav-btn">
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            <NavLink><div></div></NavLink>
            </div>
        </div>
    
        <NavLink to="others" ><img src={vector} alt="arrow" /></NavLink>
        <Outlet />
    </div>
  )
}

import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import img4 from "../images/image 7.png";
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
            
            <div className="trend">
            <div className="trends-1">
                <div className="trends-2a">
                    <img src={img4} alt="" />
                </div>
                <div className="trends-3">
                    <h5>Steal like an artist</h5>
                    <h6>Austin Kleon</h6>
                    <div className="trends-4">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
                { trending }
            </div>
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

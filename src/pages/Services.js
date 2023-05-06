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
import { Pagination, Autoplay, Navigation, Mousewheel } from "swiper";
import { motion } from "framer-motion";

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
        <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}   
        >What We Do</motion.h3>
        <motion.div className="services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}  
        >
            { whatWe }
        </motion.div>
        <motion.div className="trends"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        >
            <h3>Trending Books</h3>
            <Swiper
            direction={"horizontal"}
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
                { trending }
                </Swiper>
        </motion.div>
    
        <NavLink to="others" ><img src={vector} alt="arrow" /></NavLink>
        <Outlet />
    </div>
  )
}

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

export default function Services({ inputRef }) {
  
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        initial={{ opacity: 0, y:-30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5, delay: 1 }}   
        >What We Do</motion.h3>
        <motion.div className="services"
        initial={{ opacity: 0, x:-100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 2}}  
        >
            { whatWe }
        </motion.div>
        <div className="trends">
            <motion.h3
            initial={{ opacity: 0, y:-30 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 1 }}
            >Trending Books</motion.h3>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8}}
            >
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
        </div>
    
        <motion.div>
          <NavLink onClick={handleClick} ><img src={vector} alt="arrow" /></NavLink>
        </motion.div>
        <Outlet />
    </div>
  )
}

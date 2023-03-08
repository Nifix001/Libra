import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import img1 from "../images/🦆 illustration _Vision books telescope_.png";
import img2 from "../images/🦆 icon _apple books_.png";
import img3 from "../images/🦆 illustration _Logistics_.png";
import img4 from "../images/image 7.png";
import img5 from "../images/image 9.png";
import img6 from "../images/image 11.png";
import img7 from "../images/image 8.png";
import data from "../database/Data";
import DataW from "../database/DataW";
import WhatweDo from "../framework/WhatWeDo"
import Trending from "../framework/Trending"

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
            <div className="trends-1">
                <div className="trends-2">
                    <img src={img5} alt="" />
                </div>
                <div className="trends-3">
                    <h5>Half of a yellow sun</h5>
                    <h6>Austin Kleon</h6>
                    <div className="trends-4">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
            <div className="trends-1">
                <div className="trends-2">
                    <img src={img6} alt="" />
                </div>
                <div className="trends-3">
                    <h5>The sun and her flowers</h5>
                    <h6>Rupi Kour</h6>
                    <div className="trends-4">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
            <div className="trends-1">
                <div className="trends-2">
                    <img src={img7} alt="" />
                </div>
                <div className="trends-3">
                    <h5>Purple Hibscus</h5>
                    <h6>Chimamanda Adichie</h6>
                    <div className="trends-4">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
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

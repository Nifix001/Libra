import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png";
import img1 from "../images/🦆 illustration _Vision books telescope_.png";
import img2 from "../images/🦆 icon _apple books_.png";
import img3 from "../images/🦆 illustration _Logistics_.png";
import img4 from "../images/image 7.png";
import img5 from "../images/image 9.png";
import img6 from "../images/image 11.png";
import img7 from "../images/image 8.png";

export default function Services() {
  return (
    <div className="srv">
        <h3>What We Do</h3>
        <div className="services">
        <div className="services-1">
            <img src={img1} alt="" />
            <h4>Source books</h4>
            <p>We deligently go through the process <br /> of vetting, selecting, and compiling <br /> live changing books for your reading <br /> enjoment</p>
        </div>
        <div className="services-1">
            <img src={img2} alt="" />
            <h4>Lend Books</h4>
            <p>We help you save some money while <br /> getting the same value through the <br /> lending of books at reduced rates</p>
        </div>
        <div className="services-1">
            <img src={img3} alt="" />
            <h4>Deliver Books</h4>
            <p>Our efficient delivery services gets <br /> your books to your doorstep saving <br /> you some energy to read.</p>
        </div>
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

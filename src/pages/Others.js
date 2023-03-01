import { NavLink, Outlet } from "react-router-dom";
import vector from "../images/chevron-down.png"

export default function Others() {
  return (
    <div>
        <div className="others">
            <h2>Other Books</h2>
            <div>
                <div>
                    <NavLink to="/">All</NavLink>
                    <select>
                        <option value="">Genre</option>
                    </select>
                </div>
                <input type="text" placeholder="Search by name" />
            </div>
            <div>
                <div className="books">
                    <img src="" alt="books" />
                    <h4>The Alchemist</h4>
                    <h6>Paulo Coelho</h6>
                    <div>
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
                <div className="books">
                    <img src="" alt="books" />
                    <h4>A confederacy of dunces</h4>
                    <h6>John Kennedy T.</h6>
                    <div>
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
                <div className="books">
                    <img src="" alt="books" />
                    <h4>Why we sleep</h4>
                    <h6>Matthew Walker</h6>
                    <div>
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
                <div className="books">
                    <img src="" alt="books" />
                    <h4>An enemy called average</h4>
                    <h6>John L.Mason</h6>
                    <div>
                        <i></i>
                        <button>View details</button>
                    </div>
                    <div className="nav-btn">
                        <NavLink><div></div></NavLink>
                        <NavLink><div></div></NavLink>
                        <NavLink><div></div></NavLink>
                        <NavLink><div></div></NavLink>
                    </div>
                </div>
            </div>
      </div>
      <div className="reviews">
        <h2>Reviews and Ratings</h2>
            <div>
                <div className="personal-reviews">
                    <div className="personal-details">
                        <img src="" alt="" />
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
                        <img src="" alt="" />
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
                        <img src="" alt="" />
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
                        <img src="" alt="" />
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
                <NavLink><div></div></NavLink>
            </div> 
            <hr />
            <h4>Have reviews or ratings to about your favourite book? Enter it below.</h4>
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

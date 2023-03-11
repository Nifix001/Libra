import { Outlet } from "react-router-dom";
import img1 from "../images/Frame.png";

export default function SignLayout() {
  return (
    <div className="bck">
      <img src={img1} alt="" />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./Layout/LandingPageLayout";
import  HomeLayout  from "./Layout/HomeLayout";
import Services from "./pages/Services";
import Others from "./pages/Others";
import Footer from "./pages/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useRef } from "react";

library.add(fas,fab, far)

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="services" element={<Services inputRef={inputRef} />}>
        <Route path="others" element={<Others inputRef={inputRef} />}>
        <Route path="footer" element={<Footer inputRef={inputRef} />} />
        </Route>
        
        </Route>
        </Route> 
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
    </Route>
  )
)
function App() {
  const inputRef = useRef(null);
  return (    
    <RouterProvider router={router} />
    
  );
}

export default App;

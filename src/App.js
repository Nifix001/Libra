import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./Layout/LandingPageLayout";
import  HomeLayout  from "./Layout/HomeLayout";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Services from "./pages/Services";
import Others from "./pages/Others";
import Footer from "./pages/Footer";

library.add(fas,fab, far)



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="services" element={<Services />}>
        <Route path="others" element={<Others />}>
        <Route path="footer" element={<Footer />}/>
        </Route>
        </Route>

        </Route>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
    </Route>
    </>
  )
  )


  function App() {
  return (    
    <RouterProvider router={router}  />    
  );
}

export default App;

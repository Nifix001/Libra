import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./Layout/LandingPageLayout";
import  HomeLayout  from "./Layout/HomeLayout";
import Services from "./pages/Services";
import Others from "./pages/Others";
import Footer from "./pages/Footer";
import Data from "./Data";

const  books = Data.map(item => {
  return (
    <Services 
      key={item.id}
      {...item}
      />
  )
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="services" element={<Services />}>
        <Route path="others" element={<Others/>}>
        <Route path="footer" element={<Footer />} />
        </Route>
        
        </Route>
        </Route> 
    </Route>
  )
)
function App() {
  
  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;

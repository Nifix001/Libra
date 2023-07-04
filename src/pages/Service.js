import { useState } from "react"
import Footer from "./Footer"
import Others from "./Others"
import Services from "./Services"


const Service = () => {
    const [activeComponent, setActiveComponent] = useState('component1');

    const handleClick = (componentName) => {
      setActiveComponent(componentName);
    }
  return (
    <div>
        <Services onButttonClick={handleClick} />
        <Others isActive={activeComponent === 'component2'} />
        <Footer />
    </div>
  )
}

export default Service

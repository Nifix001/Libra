import Footer from "./Footer"
import Others from "./Others"
import Services from "./Services"
import { useRef } from "react"

const Service = () => {
    const inputRef = useRef(null);

  return (
    <div>
        <Services />
        <Others ref={inputRef} />
        <Footer />
    </div>
  )
}

export default Service

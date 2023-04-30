import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews(props) {
  return (
    <div>
        <div className="personal-reviews">
                    <div className="personal-details">
                        <img src={props.image} alt="" />
                        <div>
                            <h4>{props.name}</h4>
                            <h5>{props.title}</h5>
                        </div>
                    </div>
                        <p>{props.review}</p>
                        <div>{props.ratings}<FontAwesomeIcon icon="fa-solid fa-star-sharp" style={{color: "yellow", fontSize:"20px"}}/></div>
        </div>
    </div>
  )
}

export default function Trending(props) {
  return (
    <div>
      
        <div className="trends-1">
                <div className="trends-2">
                    <img src={props.image} alt="" />
                </div>
                <div className="trends-3">
                    <h5>{props.title}</h5>
                    <h6>{props.author}</h6>
                    <div className="trends-4">
                        <i></i>
                        <button>{props.button}</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

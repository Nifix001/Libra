export default function WhatWeDo(props) {
  return (
    <div>
      <div className="services-1">
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

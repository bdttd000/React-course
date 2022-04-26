import React from "react"
import starImage from "../images/star.png"
// import personImage from "../images/person.png"

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} alt="Error" className="card--image" />
            <div className="card--stats">
                <img src={starImage} alt="Error" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
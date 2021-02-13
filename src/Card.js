import React from 'react'
import './card.css';

export default function Card() {
    return (
        <div className="item-display">
            <CardItems heading="About the Company" icon={<i class="fas fa-building"></i>}/>
            <CardItems heading="Our Values" icon={<i class="fas fa-globe-africa"></i>}/>
            <CardItems heading="Our Mission" icon={<i class="fas fa-landmark"></i>}/>
        </div>
    )
}

function CardItems(props){
    return(
        <div className="card-items">
            {props.icon}
            <div className="home">
                <h2>{props.heading}</h2>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae debitis a nisi quaerat aliquid illo, quasi labore adipisci odio similique soluta! Pariatur, reiciendis nesciunt . </p>
            </div>
        </div>
    )
}

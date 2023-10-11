import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'
import './DestinationStyles.css';

import React from 'react'

function DestinationDatas(props) {
    return (
        <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading} </h2>
                <p>
                    {props.text}
                </p>
            </div>

            <div className="image">
                <img src={props.img1} alt="destination1" />
                <img src={props.img2} alt="destination2" />
            </div>

        </div>
    )
}

export default DestinationDatas

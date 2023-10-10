import './DestinationStyles.css';
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'

import React from 'react'

function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give your opportunity to see a lot of places, within a time frame</p>


            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanic rocks and steam vents.
                    </p>
                </div>

                <div className="image">
                    <img src={Mountain1} alt="destination1" />
                    <img src={Mountain2} alt="destination2" />
                </div>

            </div>
        </div>
    )
}

export default Destination
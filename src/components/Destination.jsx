import './DestinationStyles.css';
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/8.jpg'
import Mountain4 from '../assets/5.jpg'

import React from 'react'
import DestinationData from './DestinationDatas';

function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give your opportunity to see a lot of places, within a time frame</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanic rocks and steam vents."
                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanic rocks and steam vents."
                img1={Mountain3}
                img2={Mountain4}
            />

        </div>
    )
}

export default Destination
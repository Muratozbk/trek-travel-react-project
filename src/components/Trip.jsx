import TripData from '../data/TripData';
import './TripStyles.css';
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'

import React from 'react'

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="tripcard">
                <TripData heading="Trip in Indonesia"
                    text={"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between Indian and Pacific oceans. It consist of over 17.000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"}
                    image={Trip1} />
                <TripData heading="Trip in Malaysia"
                    text={"Malaysia, is a country in Southeast Asia and Oceania between Indian and Pacific oceans. It consist of over 17.000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"}
                    image={Trip2} />
                <TripData heading="Trip in France"
                    text={"France, is a country in Southwest Europe . It consist of over 17 city, including Paris, Java, Sulawesi, and parts of Borneo and New Guinea"}
                    image={Trip3} />
            </div>
        </div>
    )
}

export default Trip
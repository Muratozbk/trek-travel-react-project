import '../components/TripStyles.css';


function TripData(props) {
    return (
        <div className='trip-card'>
            <div className="trip-image">
                <img src={props.image} alt="trip" />
            </div>
            <h4>{props.heading} </h4>
            <p>{props.text} </p>
        </div>
    )
}

export default TripData

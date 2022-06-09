const EarthquakeInfo = ({ info }) => {
    return (
        <div className="earthquake-info">
            <h2>Earthquake Info</h2>
            <ul>
                <li>Location: <strong>{info.location}</strong></li>
                <li>Date: <strong>{info.date}</strong></li>
                <li>Size: <strong>{info.size}</strong></li>
                <li>Depth: <strong>{info.depth}</strong></li>
            </ul>
        </div>
    )
}

export default EarthquakeInfo
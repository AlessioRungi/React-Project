import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import EarthquakeInfo from './EarthquakeInfo'
import Moment from 'moment'

const Map = ({ earthquakeData, center, zoom }) => {
    const [earthquakeInfo, setHeartquakeInfo] = useState(null)

    const markers = earthquakeData.map(earthquake => {
        return <LocationMarker lat={earthquake.latitude} 
        lng={earthquake.longitude}
        onClick={() => setHeartquakeInfo({
            location: earthquake.humanReadableLocation,
            date: Moment(earthquake.timestamp).format('DD MMM YYYY'),
            depth: earthquake.depth,
            size: earthquake.size
        })} />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA17ViXcFUEbrLlPKC5529ggyS7vH5TCWo' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            { earthquakeInfo && <EarthquakeInfo info={earthquakeInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 65,
        lng: -18
    },
    zoom: 6.2
}

export default Map
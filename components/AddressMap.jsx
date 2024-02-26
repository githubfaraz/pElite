'use client'

import L from 'leaflet'
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {

    const [coord, setCoord] = useState([-1.4216878999972629,36.976069784657376])
 
    const SearchLocation = () => {
        return (
            <div className="search-location">
                <input type="text" placeholder="Search Location" />
            </div>
        )
    }

    const GetMyLocation = () => {
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoord([position.coords.latitude, position.coords.longitude])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>
        )
    }

    return (
        <div className='mx-auto'>
            <h3 className='py-4 text-center my-4 text-orange-500 font-bold text-2xl'>Our Location</h3>
            <MapContainer style={{
                height: '60vh',
                width: '90vw',
                margin: '2px auto',
                paddingLeft: '8rem',
                borderRadius: '1rem',
            }} center={coord} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[-1.4216878999972629,36.976069784657376]}>
                     <Popup>
                     Kongoni Business Park 1, B09, Athi River <br /> Nairobi,Kenya
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
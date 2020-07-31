import React from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styles from "./mainmap.module.css"

export default class MainMap extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div id={styles.mainMapId}>
                <Map center={position}
                    zoom = {this.state.zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Pop!
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }

    // const primaryMap = L.map("main-map-id").setView([51.505, -0.09], 13);

    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'your.mapbox.access.token'
    // }).addTo(mymap);


    // static propTypes = {
    //     position: PropTypes.array,
    //     zoom: PropTypes.number,
    //     markerText: PropTypes.string
    // }
    // static defaultProps = {
    //     position: [51, -1],
    //     zoom: 13,
    //     markerText: ""
    // }
    // render() {
    //     const { options } = this.props

    //     if (typeof window !== 'undefined') {
    //         return (
    //             <div id={styles.mainMapId}>
    //                 <Map center={this.props.position} zoom={this.props.zoom}>
    //                     <TileLayer
    //                         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    //                         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    //                     />
    //                 </Map>
    //             </div>
    //         )
    //     }
    //     return null
    // }
}
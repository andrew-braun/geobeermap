import React from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styles from "./mapmarker.module.css"

export default function MapMarker( props ) {
        return (
            <div id={styles.mapMarker}>
                    <Marker position={props.position}>
                        <Popup>
                            {props.name}
                        </Popup>
                    </Marker>
            </div>
        )
    }

/* 

1. Create Marker component containing location + content 
passed to Marker in props from MainMap
2. For every node returned by GraphQL query, generate a marker
*/
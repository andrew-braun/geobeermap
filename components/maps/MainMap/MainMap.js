import * as React from "react"
import Map, { GeolocateControl } from "react-map-gl"

import "mapbox-gl/dist/mapbox-gl.css"
import styles from "./MainMap.module.scss"

export default function MainMap({}) {
	return (
		<div className={`${styles.mainMap}`}>
			<Map
				initialViewState={{
					latitude: 41.704202197992004,
					longitude: 44.77889107691885,
					zoom: 11,
				}}
				style={{ width: 800, height: 400 }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
			/>
		</div>
	)
}

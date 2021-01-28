import React from "react"
import { Map, TileLayer } from "react-leaflet"
import MapMarker from "./MapMarker"
import "../../styles/global.css"
import styles from "./mainmap.module.css"

export default function MainMap(props) {
	const { data, position, zoomLevel } = props

	// Generate map markers using MapMarker component
	const Markers = data.map((entry, index) => {
		// console.log(markerClickHandler)

		return (
			<React.Fragment key={`${entry.name}-${entry.type}-${entry.id}`}>
				<MapMarker
					name={entry.name}
					type={entry.type}
					googlemaps={entry.googlemaps}
					facebook={entry.facebook}
					twitter={entry.twitter}
					instagram={entry.instagram}
					website={entry.website}
					position={entry.coordinates}
					open={entry.open}
					id={entry.id}
					key={entry.id}
					path={entry.path}
					index={index}
				/>
			</React.Fragment>
		)
	})

	return (
		<div id={styles.mainMapId} className={styles.mainMapContainer}>
			{/* Check for window and add map */}
			{typeof window !== "undefined" ? (
				<Map center={position} zoom={zoomLevel}>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/ab-dev/ckdaldm751b6s1ipgqrzoquzj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWItZGV2IiwiYSI6ImNrajh6M3NzZDBhdHczNHBldGliZTlrY28ifQ.sB8QZDJJSr40ekBZnjVsRg"
						attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
					/>
					{Markers}
				</Map>
			) : (
				<div className={styles.mapLoading}>
					<h2>Loading map</h2>
				</div>
			)}
		</div>
	)
}

import React from "react"
import { Map, TileLayer } from "react-leaflet"
import MapMarker from "./MapMarker"
import "../../styles/global.css"
import styles from "./mainmap.module.css"

export default function MainMap(props) {
	const { data } = props

	// Generate map markers using MapMarker component
	const Markers = data.map((entry, index) => {
		return (
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
		)
	})

	// Set initial map position
	const position = [41.689472, 44.79848]

	return (
		<div id={styles.mainMapId} className={styles.mainMapContainer}>
			{/* Check for window and add map */}
			{typeof window !== "undefined" ? (
				<Map center={position} zoom={10}>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/ab-dev/ckdaldm751b6s1ipgqrzoquzj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWItZGV2IiwiYSI6ImNrZGFjcjFnNjBoM3QydG1oeG01NHg3cm4ifQ.MumpPYqqGqbsFqUJPMxNsg"
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

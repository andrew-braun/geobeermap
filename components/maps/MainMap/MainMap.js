import { useState, useEffect } from "react"
import Map, { GeolocateControl, Marker } from "react-map-gl"

import "mapbox-gl/dist/mapbox-gl.css"
import styles from "./MainMap.module.scss"

// https://blog.logrocket.com/using-mapbox-gl-js-react/
export default function MainMap({}) {
	// Set initial map properties--initialViewport indicates first load, pre useEffect update
	const [viewport, setViewport] = useState({
		latitude: 41.704202197992004,
		longitude: 44.77889107691885,
		zoom: 9,
		initialViewport: true,
	})

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setViewport({
				// Set initial viewport to false in order to render map marker
				...viewport,
				latitude: pos.coords.latitude,
				longitude: pos.coords.longitude,
				zoom: 3.5,
				initialViewport: false,
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={`${styles.mainMap}`}>
			<Map
				initialViewState={{
					latitude: viewport.latitude,
					longitude: viewport.longitude,
					zoom: 11,
				}}
				style={{ width: 800, height: 400 }}
				mapStyle="mapbox://styles/andrew-braun/cl6hupilg000515jyytsivq9d"
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
			>
				{!viewport.initialViewport && (
					<Marker longitude={viewport.longitude} latitude={viewport.latitude} />
				)}
			</Map>
		</div>
	)
}

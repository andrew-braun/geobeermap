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
		zoom: 11,
		initialViewport: true,
	})

	// Run only on first page load when location request is made; when permission is granted, move and zoom
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setViewport({
				// Set initial viewport to false in order to render map marker
				...viewport,
				latitude: pos.coords.latitude,
				longitude: pos.coords.longitude,
				zoom: 13,
				initialViewport: false,
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={`${styles.mainMap}`}>
			<div className={`${styles.mapWrapper}`}>
				<Map
					initialViewState={{
						latitude: viewport.latitude,
						longitude: viewport.longitude,
						zoom: viewport.zoom,
					}}
					style={{ minHeight: "80vh" }}
					onViewportChange={(viewport) => setViewport(viewport)}
					mapStyle="mapbox://styles/andrew-braun/cl6hv3y3z003d15o9ktycfewt"
					mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
				>
					{!viewport.initialViewport && (
						<Marker
							longitude={viewport.longitude}
							latitude={viewport.latitude}
						/>
					)}
				</Map>
			</div>
		</div>
	)
}

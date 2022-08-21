import { useState, useEffect } from "react"
import { CgArrowLongRightL } from "react-icons/cg"
import dynamic from "next/dynamic"
import Map, { Marker } from "react-map-gl"
import PrimaryMarker from "components/maps/markers/PrimaryMarker"

const MapSidebar = dynamic(() => import("./MapSidebar"))
const SlideIn = dynamic(() => import("components/ui/SlideIn/SlideIn"))

import { iconSizes } from "styles/style-variables"
import "mapbox-gl/dist/mapbox-gl.css"
import styles from "./MainMap.module.scss"

// https://blog.logrocket.com/using-mapbox-gl-js-react/
export default function MainMap({ venues }) {
	// Set initial map properties--initialViewport indicates first load, pre useEffect update
	const [viewport, setViewport] = useState({
		latitude: 41.704202197992004,
		longitude: 44.77889107691885,
		zoom: 11,
		initialViewport: true,
	})
	const [isSidebarHidden, setIsSidebarHidden] = useState(false)
	const [activeVenue, setActiveVenue] = useState(null)

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

	const handleMarkerClick = (venueSlug) => {
		console.log(venueSlug)
		setActiveVenue(venueSlug)
	}
	const mapMarkers = venues
		.map((venue, venueIndex) => {
			const locationMarkers = venue.location.locations.map((location) => {
				console.log(location)
				return (
					<PrimaryMarker
						longitude={location.longitude}
						latitude={location.latitude}
						onClick={handleMarkerClick}
						venueSlug={venue.slug}
						active={activeVenue === venue.slug}
						key={`${venue.slug}-${location.location_id}`}
					/>
				)
			})
			return locationMarkers
		})
		.flat()

	const handleSidebarButtonClick = () => {
		setIsSidebarHidden(!isSidebarHidden)
	}

	return (
		<div className={`${styles.mainMap}`}>
			<SlideIn onClick={handleSidebarButtonClick} hidden={isSidebarHidden}>
				<MapSidebar venues={venues} activeVenue={activeVenue} />
			</SlideIn>
			{isSidebarHidden && (
				<div className={`${styles.openSidebarArrow}`}>
					<CgArrowLongRightL
						size={iconSizes.medium}
						onClick={handleSidebarButtonClick}
					/>
				</div>
			)}
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
					{mapMarkers}
					{!viewport.initialViewport && (
						<PrimaryMarker
							markerColor="var(--accent-2)"
							longitude={viewport.longitude}
							latitude={viewport.latitude}
						/>
					)}
				</Map>
			</div>
		</div>
	)
}

import { Marker } from "react-map-gl"
import { FaMapMarkerAlt } from "react-icons/fa"

import styles from "./PrimaryMarker.module.scss"

function PrimaryMarker({
	latitude,
	longitude,
	markerColor = "var(--accent-1)",
	highlightColor = "var(--accent-2",
	venueSlug,
	onClick,
	active,
}) {
	return (
		<>
			<Marker
				latitude={latitude}
				longitude={longitude}
				onClick={venueSlug ? (event) => onClick(event, venueSlug) : onClick}
			>
				<div className={`${styles.primaryMarker}`}>
					<FaMapMarkerAlt
						color={active ? highlightColor : markerColor}
						size={active ? 70 : 50}
						className={`${styles.icon}`}
					/>
				</div>
				{/* <div className={`${styles.popup}`}>GeoBeerMap</div> */}
			</Marker>
		</>
	)
}

export default PrimaryMarker
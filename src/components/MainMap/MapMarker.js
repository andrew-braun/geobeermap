import React from "react"
import { Marker, Popup } from "react-leaflet"
import styles from "./mapmarker.module.css"

export default function MapMarker(props) {
	const { id, name, type, facebook, website, instagram } = props

	return (
		<div className={styles.mapMarker} id={`${id}-marker`}>
			<Marker position={props.position}>
				<Popup>
					<div className={styles.popupName}>{name}</div>
					<div className={styles.popupType}>{type}</div>
					<div className={styles.popupSocialButtons}>
						{facebook && (
							<div className={styles.popupFb}>
								<a href={facebook} target="_blank" rel="noreferrer">
									FB
								</a>
							</div>
						)}
						{instagram && (
							<div className={styles.popupIg}>
								<a href={instagram} target="_blank" rel="noreferrer">
									IG
								</a>
							</div>
						)}
						{website && (
							<div className={styles.popupWebsite}>
								<a href={website} target="_blank" rel="noreferrer">
									Website
								</a>
							</div>
						)}
					</div>
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

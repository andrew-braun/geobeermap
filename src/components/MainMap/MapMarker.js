import React from "react"
import { Marker, Popup } from "react-leaflet"
import SocialButtons from "../SocialButtons/SocialButtons"
import styles from "./mapmarker.module.css"
import "./mapmarker.css"

export default function MapMarker(props) {
	const {
		id,
		name,
		type,
		path,
		facebook,
		website,
		instagram,
		untappd,
		googlemaps,
		twitter,
		key,
	} = props

	return (
		<React.Fragment>
			{props.position !== null ? (
				<div
					className={styles.mapMarker}
					id={`${id}-marker`}
					key={`${key}-marker-div`}
				>
					<Marker position={props.position}>
						<Popup>
							<div className={styles.mapMarkerWrapper}>
								<div className={styles.popupName}>
									<a href={path}>{name}</a>
								</div>
								<div className={styles.popupType}>{type}</div>
								<div className={styles.popupSocialBox}>
									<SocialButtons
										facebook={facebook}
										instagram={instagram}
										twitter={twitter}
										untappd={untappd}
										website={website}
										googlemaps={googlemaps}
									/>
								</div>
							</div>
						</Popup>
					</Marker>
				</div>
			) : null}
		</React.Fragment>
	)
}

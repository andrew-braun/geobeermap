import React from "react"
import { Marker, Popup } from "react-leaflet"
import SocialButtons from "../SocialButtons/SocialButtons"
import styles from "./mapmarker.module.css"

export default function MapMarker(props) {
	const { id, name, type, path, facebook, website, instagram, untappd, googlemaps, twitter } = props

	return (
		<React.Fragment>
		{ (props.position !== null) ? 
			<div className={styles.mapMarker} id={`${id}-marker`}>
				<Marker position={props.position}>
					<Popup>
						<div className={styles.popupName}>
							<a href={path}>
								{name}
							</a>
						</div>
						<div className={styles.popupType}>{type}</div>
						<div className={styles.socialBox}>
						<SocialButtons 
						facebook={facebook}
						instagram={instagram}
						twitter={twitter}
						untappd={untappd}
						website={website}
						googlemaps={googlemaps}
						/>
					</div>
					</Popup>
				</Marker>
			</div> : null
		}
		</React.Fragment>
	)
}

/* 

1. Create Marker component containing location + content 
passed to Marker in props from MainMap
2. For every node returned by GraphQL query, generate a marker
*/

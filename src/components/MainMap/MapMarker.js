import React from "react"
import { Marker, Popup } from "react-leaflet"
import styles from "./mapmarker.module.css"

export default function MapMarker(props) {
  return (
    <div className={styles.mapMarker} id={`${props.id}-marker`}>
      <Marker position={props.position}>
        <Popup>
          <div className={styles.popupName}>{props.name}</div>
          <div className={styles.popupType}>{props.type}</div>
          <div className={styles.popupSocialButtons}>
            {props.facebook && (
              <div className={styles.popupFb}>
                <a href={props.facebook} 
                    target="_blank"
                    rel="noreferrer"
                    >
                  FB
                </a>
              </div>
            )}
            {props.instagram && (
              <div className={styles.popupIg}>
                <a href={props.instagram} 
                    target="_blank"
                    rel="noreferrer"
                    >
                  IG
                </a>
              </div>
            )}
            {props.website && (
              <div className={styles.popupWebsite}>
                <a href={props.website}
                    target="_blank"
                    rel="noreferrer"
                    >
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

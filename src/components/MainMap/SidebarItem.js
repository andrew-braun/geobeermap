import React from 'react'
// import { Marker, sidebar } from "react-leaflet"
import styles from "./sidebaritem.module.css"

export default function SidebarItem( props ) {
        return (
            <div className={styles.mapSidebarItem}>
                <div className={styles.sidebarName}>{props.name}</div>
                <div className={styles.sidebarType}>{props.type}</div>
                <div className={styles.sidebarSocialButtons}>
                    { (props.facebook) &&
                        <div className={styles.sidebarFb}>
                            <a className={styles.sidebarSocialLink}
                                href={props.facebook} 
                                target="_blank">FB</a>
                        </div>
                    }
                    { (props.instagram) &&
                        <div className={styles.sidebarIg}>
                            <a className={styles.sidebarSocialLink}
                            href={props.instagram} 
                            target="_blank">IG</a>
                        </div>
                    }
                    { (props.website) &&
                        <div className={styles.sidebarWebsite}>
                            <a className={styles.sidebarSocialLink}
                            href={props.website} 
                            target="_blank">Website</a>
                        </div>
                    }
                </div>
            </div>
        )
    }

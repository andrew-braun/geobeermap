import React from 'react'
import { Map, Marker, sidebar } from "react-leaflet"
import styles from "./sidebaritem.module.css"

export default function SidebarItem( props ) {

    const handleClick = () => {
        console.log(`${props.id}-marker`)
    }   
        return (
            <div className={styles.mapSidebarItem} id={`${props.id}-sidebar`}
                onClick={handleClick}
                >
                <div className={styles.sidebarName}>{props.name}</div>
                <div className={styles.sidebarType}>{props.type}</div>
                <div className={styles.sidebarSocialButtons}>
                    { (props.facebook) &&
                        <div className={styles.sidebarFb}>
                            <a className={styles.sidebarSocialLink}
                                href={props.facebook} 
                                target="_blank"
                                rel="noreferrer"
                                >FB</a>
                        </div>
                    }
                    { (props.instagram) &&
                        <div className={styles.sidebarIg}>
                            <a className={styles.sidebarSocialLink}
                            href={props.instagram} 
                            target="_blank"
                            rel="noreferrer"
                            >IG</a>
                        </div>
                    }
                    { (props.website) &&
                        <div className={styles.sidebarWebsite}>
                            <a className={styles.sidebarSocialLink}
                            href={props.website} 
                            target="_blank"
                            rel="noreferrer"
                            >Website</a>
                        </div>
                    }
                </div>
            </div>
        )
    }

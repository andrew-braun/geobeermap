import React from 'react'
import SidebarItem from "./SidebarItem"
import styles from "./mapsidebar.module.css"

export default function MapSidebar( props ) {
    const entryArray = props.data;

    const sidebarItems = entryArray.map(entry => 
        <SidebarItem 
            name={entry.name}
            type={entry.type}
            googlemaps={entry.googlemaps}
            facebook={entry.facebook}
            instagram={entry.instagram}
            website={entry.website}
            position={entry.coordinates}
            id={entry.id}
            key={entry.id}
        />
    )
        return (
            <div className={styles.mapSidebar}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarTabs}>
                        <button className={styles.sidebarTab} id={styles.sidebarTab1}>
                            All
                        </button>
                        <button className={styles.sidebarTab} id={styles.sidebarTab2}>
                            Breweries
                        </button>
                        <button className={styles.sidebarTab} id={styles.sidebarTab3}>
                            Bars
                        </button>
                        <button className={styles.sidebarTab} id={styles.sidebarTab4}>
                            Stores
                        </button>
                    </div>
                </div>
                {sidebarItems}
            </div>
        )
    }

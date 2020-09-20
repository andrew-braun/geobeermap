import React from 'react'
import SidebarItem from "./SidebarItem"
import "../../styles/global.css"
import styles from "./mapsidebar.module.css"

export default function MapSidebar( props ) {

    const { data, handleTabClick } = props

    const sidebarItems = data.map(entry => 
        <SidebarItem
            name={entry.name}
            type={entry.type}
            open={entry.open}
            googlemaps={entry.googlemaps}
            facebook={entry.facebook}
            instagram={entry.instagram}
            website={entry.website}
            twitter={entry.twitter}
            untappd={entry.untappd}
            position={entry.coordinates}
            id={entry.id}
            path={entry.path}
            key={entry.id}
        />
        )

        return (
            <div className={styles.mainMapSidebar}>
				<div className={styles.sidebarHeader}>
					<div className={styles.sidebarTabs}>
						<button className={styles.sidebarTab} 
						id={styles.sidebarTab1}
						tabIndex="-3"
						onClick={handleTabClick}
						>
						All
						</button>
						<button className={styles.sidebarTab} 
						id={styles.sidebarTab2}
						tabIndex="-4"
						onClick={handleTabClick}
						>
							Breweries
						</button>
						<button className={styles.sidebarTab} 
						id={styles.sidebarTab3}
						tabIndex="-5"
						onClick={handleTabClick}
						>
							Bars
						</button>
						<button className={styles.sidebarTab} 
						id={styles.sidebarTab4}
						tabIndex="-6"
						onClick={handleTabClick}
						>
							Retailers
						</button>
					</div>
				</div>
				<div className={styles.mapSidebar}>
					{/* Use generated list of map sidebar items */}
					{sidebarItems}
				</div>
			</div>
        )
    }
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Map, TileLayer } from "react-leaflet"
import MapMarker from "./MapMarker"
import SidebarItem from "./SidebarItem"
import styles from "./mainmap.module.css"

export default function MainMap() {
    const [ clickedTab, setClickedTab ] = useState("")

    // GraphQL query for data entries
	const data = useStaticQuery(
		graphql`
			query MapEntriesQuery {
				allEntriesJson {
					edges {
						node {
							id
							facebook
							googlemaps
							instagram
							coordinates
							name
							open
							title
							twitter
							type
							website
							path
						}
					}
				}
			}
		`
	)

	// Create an array of entry objects
	const entryArray = []

    
	for (let i = 0; i < data.allEntriesJson.edges.length; i++) {
        entryArray.push(data.allEntriesJson.edges[i].node)
        // Coordinates to floats
		entryArray[i].coordinates = entryArray[i].coordinates
			.toString()
			.split(",")
            .map(str => parseFloat(str))

        // Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
        if (Array.isArray(entryArray[i].type)) {
            entryArray[i].type = Object.values(entryArray[i].type).join(", ")
        }
        
        // Create unique ids
		entryArray[i].id = `${entryArray[i].name.toLowerCase()[0]}${
			entryArray[i].type.toString().toLowerCase()[0]
        }-${i}`
        
    }

    const filteredEntryArray = entryArray.filter(entry => {
        if (clickedTab.textContent === "All" || clickedTab === "") {
            return entry
        } else {
            return entry.type.toLowerCase().includes(clickedTab.textContent.toLowerCase().slice(0,3))
        }
    }
    )

    const handleTabClick = (event) => {
        setClickedTab(event.currentTarget);
    }


    // Generate map markers using MapMarker component
	const Markers = filteredEntryArray.map((entry, index) => {
		return (
			<MapMarker
				name={entry.name}
				type={entry.type}
				googlemaps={entry.googlemaps}
				facebook={entry.facebook}
				instagram={entry.instagram}
				website={entry.website}
				position={entry.coordinates}
				id={entry.id}
				key={entry.id}
				path={entry.path}
                index={index}
			/>
		)
	})

    // Generate sidebar items using SidebarItem component
	const sidebarItems = filteredEntryArray.map(entry => (
		<SidebarItem
			name={entry.name}
			type={entry.type}
			googlemaps={entry.googlemaps}
			facebook={entry.facebook}
			instagram={entry.instagram}
			website={entry.website}
			position={entry.coordinates}
			id={entry.id}
			path={entry.path}
			key={entry.id}
		/>
	))

    // Set initial map position
	const position = [41.689472, 44.79848]

	return (
		<div id={styles.mainMapId} className={styles.mainMapContainer}>
			{/* Map sidebar */}
            <div className={styles.mainMapSidebar}>
				<div className={styles.mapSidebar}>
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
                    {/* Use generated list of map sidebar items */}
					{sidebarItems}
				</div>
			</div>
            {/* Check for window and add map */}
			{typeof window !== "undefined" ? (
				<Map center={position} zoom={10}>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/ab-dev/ckdaldm751b6s1ipgqrzoquzj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWItZGV2IiwiYSI6ImNrZGFjcjFnNjBoM3QydG1oeG01NHg3cm4ifQ.MumpPYqqGqbsFqUJPMxNsg"
						attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
					/>
					{Markers}
				</Map>
			) : (
				<div className={styles.mapLoading}><h2>Loading map</h2></div>
			)}
		</div>
	) 
}

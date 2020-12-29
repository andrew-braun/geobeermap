import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainMap from "./MainMap"
import MapSidebar from "./MapSidebar"
import styles from "./mapcontainer.module.css"

export default function MapContainer() {
	const [clickedTab, setClickedTab] = useState("")
	const [clickedItem, setClickedItem] = useState("")
	const [mapPosition, setMapPosition] = useState([41.726878, 44.781069])
	const [mapZoom, setMapZoom] = useState("11")

	// GraphQL query for data entries that will be used to create map markers and sidebar items
	const data = useStaticQuery(
		graphql`
			query MainEntriesQuery {
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
							untappd
							type
							website
							path
						}
					}
				}
			}
		`
	)

	// Create an array of map marker/sidebar item objets
	const entryArray = []

	for (let i = 0; i < data.allEntriesJson.edges.length; i++) {
		entryArray.push(data.allEntriesJson.edges[i].node)
		// Convert coordinates to floats
		if (entryArray[i].coordinates !== null) {
			entryArray[i].coordinates = entryArray[i].coordinates
				.toString()
				.split(",")
				.map(str => parseFloat(str))
		}

		// Convert Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
		if (Array.isArray(entryArray[i].type)) {
			entryArray[i].type = Object.values(entryArray[i].type).join(", ")
		}

		/* Convert boolean to yes/no */
		if (entryArray[i].open === true) {
			entryArray[i].open = "Yes"
		} else {
			entryArray[i].open = "No"
		}

		// Create unique id for use in click events
		entryArray[i].id = `${entryArray[i].name.toLowerCase()[0]}${
			entryArray[i].type.toString().toLowerCase()[0]
		}${i}`
	}

	// Filter sidebar/markers based on entry type
	const filteredEntryArray = entryArray
		.filter(entry => {
			if (clickedTab.textContent === "All" || clickedTab === "") {
				return entry
			} else {
				return entry.type
					.toLowerCase()
					.includes(clickedTab.textContent.toLowerCase().slice(0, 3))
			}
		})
		.sort((a, b) => {
			const nameA = a.name.toLowerCase()
			const nameB = b.name.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

	const handleTabClick = event => {
		setClickedTab(event.currentTarget)
	}

	const handleItemClick = event => {
		const item = filteredEntryArray.find(
			obj => obj.id === event.currentTarget.id.split("-")[0]
		)
		setClickedItem(item)
		setMapPosition(item.coordinates)
		setMapZoom(16)
	}

	return (
		<div className={styles.mainAppContainer}>
			<div className={styles.sidebarContainer}>
				<MapSidebar
					data={filteredEntryArray}
					handleItemClick={handleItemClick}
					handleTabClick={handleTabClick}
				/>
			</div>
			<div className={styles.mapContainer}>
				<MainMap
					data={filteredEntryArray}
					zoomLevel={mapZoom}
					position={mapPosition}
					// handleTabClick={handleTabClick}
				/>
			</div>
		</div>
	)
}

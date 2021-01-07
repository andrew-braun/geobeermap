import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainMap from "./MainMap"
import MapSidebar from "./MapSidebar"
import styles from "./mapcontainer.module.css"

export default function MapContainer() {
	const [clickedTab, setClickedTab] = useState("")
	const [clickedItem, setClickedItem] = useState("")
	const [searchState, setSearchState] = useState("")
	const [mapPosition, setMapPosition] = useState([41.726878, 44.781069])
	const [mapZoom, setMapZoom] = useState("11")

	const onSearchChange = event => {
		if (!`${searchState}${event.target.value}`.includes("  ")) {
			setSearchState(event.target.value)
		}
	}

	// GraphQL query for data entries that will be used to create map markers and sidebar items
	const data = useStaticQuery(
		graphql`
			query MainEntriesQuery {
				allMdx(filter: { frontmatter: { open: { ne: null } } }) {
					edges {
						node {
							id
							frontmatter {
								city
								country
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
			}
		`
	)

	// Create an array of map marker/sidebar item objets
	const entryArray = []

	for (let i = 0; i < data.allMdx.edges.length; i++) {
		entryArray.push(data.allMdx.edges[i].node.frontmatter)
		const info = entryArray[i]

		// Convert coordinates to floats
		if (info.coordinates !== null) {
			const coordinates = info.coordinates
				.toString()
				.split(",")
				.map(str => parseFloat(str))

			info.coordinates = coordinates
		} else {
			info.coordinates = [0, 0]
		}

		// Convert Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
		if (Array.isArray(info.type)) {
			info.type = Object.values(info.type).join(", ")
		}

		/* Convert boolean to yes/no */
		if (info.open === true) {
			info.open = "Yes"
		} else {
			info.open = "No"
		}

		// Create unique id for use in click events
		info.id = `${info.name.toLowerCase()[0]}${
			info.type.toString().toLowerCase()[0]
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
		.filter(entry => {
			const entryInfo = [entry.name, entry.type, entry.city]
				.filter(item => item !== null)
				.map(item => item.toLowerCase())

			if (entryInfo.find(item => item.includes(searchState))) {
				return entry
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
					onSearchChange={onSearchChange}
					searchValue={searchState}
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

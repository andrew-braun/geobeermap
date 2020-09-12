import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainMap from "./MainMap"
import MapSidebar from "./MapSidebar"
import styles from "./appcontainer.module.css"

export default function AppContainer() {
    const [ clickedTab, setClickedTab ] = useState("")

    // GraphQL query for data entries
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

	// Create an array of entry objects
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

        // Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
        if (Array.isArray(entryArray[i].type)) {
            entryArray[i].type = Object.values(entryArray[i].type).join(", ")
		}
		
		/* Convert boolean to yes/no */
		if (entryArray[i].open === true) {
			entryArray[i].open = "Yes"
		} else {
			entryArray[i].open = "No"
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

    // Set initial map position
	const position = [41.689472, 44.79848]

	return (
        <div className={styles.mainAppContainer}>
            <div className={styles.sidebarContainer}>
                <MapSidebar 
                    data={filteredEntryArray}    
                    handleTabClick={handleTabClick}
                />
            </div>
            <div className={styles.mapContainer}>
                <MainMap 
                    data={filteredEntryArray}
                    handleTabClick={handleTabClick}
                />
            </div>
        </div>    
    ) 
}

import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Map, TileLayer } from "react-leaflet"
import MapMarker from "./MapMarker"
import MapSidebar from "./MapSidebar"
import styles from "./mainmap.module.css"

export default function MainMap() {
    const [ selectedItem, setSelectedItem ] = useState("")

    const itemSelect = (id) => {
        setSelectedItem(id)
    }
    
    console.log(selectedItem)

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
                        }
                    }
                }
            }
        `
    );

    /* Create an array of entry objects */
    const entryArray = [];

    for (let i=0; i<data.allEntriesJson.edges.length; i++) {
        entryArray.push(data.allEntriesJson.edges[i].node);
        entryArray[i].coordinates = entryArray[i].coordinates.toString().split(",").map(str => parseFloat(str));
        entryArray[i].id = `${entryArray[i].name.toLowerCase()[0]}${entryArray[i].type.toString().toLowerCase()[0]}-${i}`;
        entryArray[i].type = Object.values(entryArray[i].type).join(", ")
    };

    const Markers = entryArray.map( (entry, props) => { 
        const { data, selectedIndex } = props;
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
                openPopup={selectedIndex === entry.id}
            />
        )
        }
    )

    const position=[41.689472,44.798480];

    if (typeof window !== 'undefined') {
        return (
            <div id={styles.mainMapId} className={styles.mainMapContainer}>
                <div className={styles.mainMapSidebar}>
                    <MapSidebar 
                        data={entryArray}
                        markers = {Markers}
                    />
                </div>
                <Map center={position}
                    zoom = {10}>
                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/ab-dev/ckdaldm751b6s1ipgqrzoquzj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWItZGV2IiwiYSI6ImNrZGFjcjFnNjBoM3QydG1oeG01NHg3cm4ifQ.MumpPYqqGqbsFqUJPMxNsg"
                        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                    />
                    {Markers}
                </Map>
            </div>
        );
        }
        return null
    }
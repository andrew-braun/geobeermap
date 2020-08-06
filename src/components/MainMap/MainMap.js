import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import MapMarker from "./MapMarker"
import styles from "./mainmap.module.css"

export default function MainMap() {

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
                            location
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
    };

    console.log(entryArray[0].location);

    const position=[41.689472,44.798480];

    if (typeof window !== 'undefined') {
        console.log(data.allEntriesJson.edges)
        console.log(data.allEntriesJson.edges[0].node.name)
        return (
            <div id={styles.mainMapId}>
                <Map center={position}
                    zoom = {18}>
                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/ab-dev/ckdaldm751b6s1ipgqrzoquzj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWItZGV2IiwiYSI6ImNrZGFjcjFnNjBoM3QydG1oeG01NHg3cm4ifQ.MumpPYqqGqbsFqUJPMxNsg"
                        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                    />
                    <MapMarker 
                        name={`Sma`}
                        position={[41.689472,44.798480]}
                    />
                </Map>
            </div>
        );
        }
        return null
    }

/* 

1. Create Marker component containing location + content 
passed to Marker in props from MainMap
2. For every node returned by GraphQL query, generate a marker
*/
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styles from "./mainmap.module.css"

export default function MainMap() {
    const position=[0, 0];

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
    )

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
                    <Marker position={position}>
                        <Popup>
                            Sma
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
        }
        return null
    }

// export const query = graphql`
//     query MapEntriesQuery {
//         allEntriesJson {
//             edges {
//                 node {
//                     id
//                     facebook
//                     googlemaps
//                     instagram
//                     location
//                     name
//                     open
//                     title
//                     twitter
//                     type
//                     website
//                 }
//             }
//         }
//     }
// `
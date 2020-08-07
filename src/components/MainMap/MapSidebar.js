import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import SidebarItem from "./SidebarItem"
import styles from "./mapsidebar.module.css"

export default function MapSidebar() {
    const data = useStaticQuery(
        graphql`
            query SidebarEntriesQuery {
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

    };

    const sidebarItems = entryArray.map(entry => 
        <SidebarItem 
            name={entry.name}
            type={entry.type}
            googlemaps={entry.googlemaps}
            facebook={entry.facebook}
            instagram={entry.instagram}
            website={entry.website}
            position={entry.coordinates}
        />
    )
        return (
            <div className={styles.mapSidebar}>
                {sidebarItems}
            </div>
        )
    }

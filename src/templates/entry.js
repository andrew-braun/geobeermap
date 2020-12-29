import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown/with-html"
import Layout from "../components/Layout"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import MainMap from "../components/MainMap/MainMap"
import SEO from "../components/SEO"
import styles from "./entry.module.css"
import "./entry.css"

export default function entryTemplate({ data }) {
	const entry = data.allEntriesJson.edges[0].node
	if (Array.isArray(entry.type)) {
		entry.type = Object.values(entry.type).join(", ")
	}

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

	// console.log(Array(entry))
	return (
		<Layout>
			<SEO title={entry.name} />
			<div className={styles.entryContainer} tabIndex="-1">
				<aside className={styles.entrySidebar}>
					<div className={styles.entryLinks}>
						<h1 className={styles.entrySidebarTitle}>
							<a href={entry.website}>{entry.name}</a>
						</h1>
						<div className={styles.socialBox}>
							<SocialButtons
								facebook={entry.facebook}
								instagram={entry.instagram}
								twitter={entry.twitter}
								untappd={entry.untappd}
								website={entry.website}
								googlemaps={entry.googlemaps}
							/>
						</div>
						{entry.website ? (
							<div className={styles.entryWebsite}>
								<a href={entry.website}>Website</a>
							</div>
						) : null}
					</div>
					<table className={styles.infoTable}>
						<tr className={styles.infoRow}>
							<td className={styles.infoCell}>Type:</td>
							<td className={styles.infoCell}>{entry.type}</td>
						</tr>
						<tr className={styles.infoRow}>
							<td className={styles.infoCell}>Operational:</td>
							<td className={styles.infoCell}>{entry.open ? "Yes" : "No"}</td>
						</tr>
						<tr className={styles.infoRow}>
							<td className={styles.infoCell}>City:</td>
							<td className={styles.infoCell}>
								{entry.city}, {entry.country}
							</td>
						</tr>
					</table>
				</aside>
				<main className={styles.entryMain} tabIndex="-2">
					<div className={styles.entryContent}>
						<h2 className={styles.entryHeading}>About {entry.name}</h2>
						<ReactMarkdown
							source={entry.body}
							className="entry-body"
							escapeHtml={false}
						/>
					</div>
					{entry.beers && (
						<div className={styles.entryBeers}>
							<h2 className={styles.entryHeading}>{entry.name} Beers</h2>
						</div>
					)}
					{entry.locations && (
						<div className={styles.entryLocations}>
							<h2 className={styles.entryHeading}>Where to Drink</h2>
						</div>
					)}
					<div className={styles.entryMap}>
						<MainMap
							data={entryArray}
							zoomLevel={13}
							position={entry.coordinates}
						/>
					</div>
				</main>
			</div>
		</Layout>
	)
}

export const data = graphql`
	query entryQuery($path: String!) {
		allEntriesJson(filter: { path: { eq: $path } }) {
			edges {
				node {
					id
					facebook
					googlemaps
					instagram
					coordinates
					address
					city
					country
					name
					open
					title
					twitter
					untappd
					type
					website
					body
					path
				}
			}
		}
	}
`

import React from "react"
import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown/with-html"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import MainMap from "../components/MainMap/MainMap"
import SEO from "../components/SEO"
import styles from "./entry.module.css"
import "./entry.css"

export default function entryTemplate({ data }) {
	const body = data.allMdx.edges[0].node.body
	let excerpt = data.allMdx.edges[0].node.excerpt
	const entry = data.allMdx.edges[0].node.frontmatter

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

		// Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
		if (Array.isArray(info.type)) {
			info.type = Object.values(info.type).join(", ")
		}

		/* Convert boolean to yes/no */
		if (info.open === true) {
			info.open = "Yes"
		} else {
			info.open = "No"
		}

		// Create unique ids
		info.id = `${info.name.toLowerCase()[0]}${
			info.type.toString().toLowerCase()[0]
		}-${i}`
	}

	if (excerpt === "") {
		excerpt = `Looking for a craft beer ${entry.type
			.split(",")[0]
			.toLowerCase()}? Check out ${entry.name} in ${entry.city}! `
	}

	console.log(excerpt)
	return (
		<Layout>
			<SEO title={entry.name} description={excerpt} />
			<div className={styles.entryContainer} tabIndex="-1">
				<aside className={styles.entrySidebar}>
					<div className={styles.entryLinks}>
						<h1 className={styles.entrySidebarTitle}>{entry.name}</h1>
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
						<tbody>
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
						</tbody>
					</table>
				</aside>
				<main className={styles.entryMain} tabIndex="-2">
					<div className={styles.entryContent}>
						<h2 className={styles.entryHeading}>About {entry.name}</h2>
						{/* <ReactMarkdown
							source={entry.body}
							className="entry-body"
							escapeHtml={false}
						/> */}
						<MDXRenderer>{body}</MDXRenderer>
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
		allMdx(filter: { frontmatter: { path: { eq: $path } } }) {
			edges {
				node {
					id
					body
					excerpt
					frontmatter {
						name
						open
						address
						city
						country
						coordinates
						openingdate
						locations
						website
						googlemaps
						facebook
						instagram
						twitter
						untappd
						path
						date
						opening_date
						images

						title
						type
					}
					fileAbsolutePath
				}
			}
		}
	}
`

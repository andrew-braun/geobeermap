import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown/with-html"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"
import MainMap from "../components/MainMap/MainMap"
import SEO from "../components/SEO"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import "./entry.css"
import styles from "./entry.module.css"

export default function entryTemplate({ data: { mdx } }) {
	const { body, excerpt, frontmatter } = mdx

	// Replace null with "none" to avoid build errors
	Object.entries(frontmatter)
		.filter(arr => arr[1] === null)
		.map(arr => {
			frontmatter[arr[0]] = "none"
			return null
		})

	// Process coordinates to format LeafletJS understands
	frontmatter.coordinates !== "none"
		? (frontmatter.coordinates = frontmatter.coordinates
				.toString()
				.split(",")
				.map(str => parseFloat(str)))
		: (frontmatter.coordinates = [0, 0])

	const {
		name,
		type,
		open,
		city,
		country,
		locations,
		beers,
		facebook,
		twitter,
		googlemaps,
		untappd,
		instagram,
		website,
		logo,
	} = frontmatter

	console.log(logo)

	return (
		<Layout>
			<SEO title={name} description={excerpt} />
			<div className={styles.entryContainer} tabIndex="-1">
				<aside className={styles.entrySidebar}>
					<div className={styles.entryLinks}>
						<h1 className={styles.entrySidebarTitle}>{name}</h1>
						<div className={styles.socialBox}>
							<SocialButtons
								facebook={facebook}
								instagram={instagram}
								twitter={twitter}
								untappd={untappd}
								website={website}
								googlemaps={googlemaps}
							/>
						</div>
						{website ? (
							<div className={styles.entryWebsite}>
								<a href={website} target="_blank" rel="noreferrer noopener">
									Website
								</a>
							</div>
						) : null}
					</div>
					<table className={styles.infoTable}>
						<tbody>
							<tr className={styles.infoRow}>
								<td className={styles.infoCell}>Type:</td>
								<td className={styles.infoCell}>{type}</td>
							</tr>
							<tr className={styles.infoRow}>
								<td className={styles.infoCell}>Operational:</td>
								<td className={styles.infoCell}>{open ? "Yes" : "No"}</td>
							</tr>
							<tr className={styles.infoRow}>
								<td className={styles.infoCell}>City:</td>
								<td className={styles.infoCell}>
									{city}, {country}
								</td>
							</tr>
						</tbody>
					</table>
				</aside>
				<main className={styles.entryMain} tabIndex="-2">
					<div className={styles.entryContent}>
						<h2 className={styles.entryHeading}>About {name}</h2>

						<MDXRenderer>{body}</MDXRenderer>
					</div>
					{beers && (
						<div className={styles.entryBeers}>
							<h2 className={styles.entryHeading}>{name} Beers</h2>
						</div>
					)}
					{locations && (
						<div className={styles.entryLocations}>
							<h2 className={styles.entryHeading}>Where to Drink</h2>
						</div>
					)}
					<div className={styles.entryMap}>
						<MainMap
							data={[frontmatter]}
							zoomLevel={13}
							position={frontmatter.coordinates}
						/>
					</div>
				</main>
			</div>
		</Layout>
	)
}

export const data = graphql`
	query entryQuery($id: String!) {
		mdx(id: { eq: $id }) {
			body
			excerpt
			fileAbsolutePath
			frontmatter {
				address
				beers
				city
				coordinates
				country
				date
				facebook
				googlemaps
				images
				instagram
				logo
				name
				open
				path
				title
				twitter
				type
				untappd
				website
			}

			rawBody
			mdxAST
			slug
			id
		}
	}
`

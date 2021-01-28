import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import ReactMarkdown from "react-markdown/with-html"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import MainMap from "../components/MainMap/MainMap"
import SEO from "../components/SEO"
import styles from "./entry.module.css"
import "./entry.css"

export default function entryTemplate({ data: { mdx } }) {
	const { body, excerpt, fileAbsolutePath, frontmatter } = mdx

	const {
		name,
		type,
		open,
		city,
		country,
		locations,
		coordinates,
		beers,
		facebook,
		twitter,
		googlemaps,
		untappd,
		instagram,
		website,
	} = frontmatter

	const infoForMap = {}

	Object.entries(frontmatter).map(item => {
		let key = item[0]
		let value = item[1]

		if (key === "coordinates") {
			let formattedCoordinates = value
				? value
						.toString()
						.split(",")
						.map(str => parseFloat(str))
				: [0, 0]

			infoForMap[key] = formattedCoordinates
		} else {
			infoForMap[key] = value ?? "Not Found"
		}
	})

	console.log(infoForMap.coordinates)
	console.log(infoForMap)
	// const coordinates = frontmatter.coordinates
	// if (info.coordinates !== null) {
	// 	const coordinates = info.coordinates
	// 		.toString()
	// 		.split(",")
	// 		.map(str => parseFloat(str))

	// const body = data.mdx.body
	// let excerpt = data.allMdx.edges[0].node.excerpt
	// const entry = data.allMdx.edges[0].node.frontmatter

	// const entryArray = []

	// for (let i = 0; i < data.allMdx.edges.length; i++) {
	// 	entryArray.push(data.allMdx.edges[i].node.frontmatter)
	// 	const info = entryArray[i]

	// 	// Convert coordinates to floats

	// 		info.coordinates = coordinates
	// 	} else {
	// 		info.coordinates = [0, 0]
	// 	}

	// 	// Type list to comma-separated string (but only if original Array to avoid rejoin on reload issue)
	// 	if (Array.isArray(info.type)) {
	// 		info.type = Object.values(info.type).join(", ")
	// 	}

	// 	/* Convert boolean to yes/no */
	// 	if (info.open === true) {
	// 		info.open = "Yes"
	// 	} else {
	// 		info.open = "No"
	// 	}

	// 	// Create unique ids
	// 	info.id = `${info.name.toLowerCase()[0]}${
	// 		info.type.toString().toLowerCase()[0]
	// 	}-${i}`
	// }

	// if (excerpt === "") {
	// 	excerpt = `Looking for a craft beer ${entry.type
	// 		.split(",")[0]
	// 		.toLowerCase()}? Check out ${entry.name} in ${entry.city}! `
	// }

	// console.log(excerpt)
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
							data={[infoForMap]}
							zoomLevel={13}
							position={infoForMap.coordinates}
						/>
					</div>
				</main>
			</div>
		</Layout>
	)
}
// ($id: String!)
// "6aa2e561-05ea-5b5b-97f4-64debcb2296b"

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

// export const data = graphql`
// 	query entryQuery($path: String!) {
// 		allMdx(filter: { frontmatter: { path: { eq: $path } } }) {
// 			edges {
// 				node {
// 					id
// 					body
// 					excerpt
// 					frontmatter {
// 						name
// 						open
// 						address
// 						city
// 						country
// 						coordinates
// 						openingdate
// 						locations
// 						website
// 						googlemaps
// 						facebook
// 						instagram
// 						twitter
// 						untappd
// 						path
// 						date
// 						opening_date
// 						images

// 						title
// 						type
// 					}
// 					fileAbsolutePath
// 				}
// 			}
// 		}
// 	}
// `

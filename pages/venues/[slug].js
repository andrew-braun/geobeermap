import Image from "next/image"
import { fetchAllVenues } from "lib/helpers/api/strapi/strapi"
import { fetchVenue } from "lib/helpers/api/strapi/strapi"
import VenueSidebar from "components/Venue/VenueSidebar"

import styles from "./Venue.module.scss"

export default function Venue({ venue }) {
	console.log(venue)
	return (
		<div className={`${styles.venue}`}>
			<VenueSidebar venue={venue} side="left" />
			<main className={`${styles.content}`}>
				<div className={`${styles.text}`}>
					<h2 className={`sectionHeading`}>{venue.name}</h2>
					<div>{venue.description}</div>
				</div>
			</main>
		</div>
	)
}

export async function getStaticPaths() {
	const venues = await fetchAllVenues()
	const venueSlugs = await venues.map((venue) => {
		return {
			params: {
				slug: venue.slug,
			},
		}
	})

	return {
		paths: [...venueSlugs],
		fallback: false, // can also be true or 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const slug = params.slug

	const venue = await fetchVenue(slug)

	return {
		props: {
			venue: JSON.parse(JSON.stringify(venue.data.attributes)),
			id: venue.data.id,
		},
	}
}
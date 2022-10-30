import Image from "next/image"
import { fetchAllVenues } from "lib/helpers/api/strapi/strapi"
import { fetchVenue } from "lib/helpers/api/strapi/strapi"

import styles from "./Venue.module.scss"

export default function Venue({ venue }) {
	console.log(venue)
	return (
		<div className={`${styles.venue}`}>
			<aside className={`${styles.sidebar}`}>
				<div className={`${styles.logoWrapper}`}>
					<Image
						src={venue.business_information.logo.data.attributes.url}
						alt={`${venue.name} logo`}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</aside>
			<main className={`${styles.content}`}>
				<h2>{venue.name}</h2>
				<p>{venue.description}</p>
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

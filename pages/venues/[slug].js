import { useRouter } from "next/router"
import { fetchAllVenues } from "lib/helpers/api/strapi/strapi"
import { fetchVenue } from "lib/helpers/api/strapi/strapi"

export default function Venue({ venue }) {
	console.log(venue)
	return (
		<main>
			<h2>{venue.name}</h2>
		</main>
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
	console.log(venue)

	return {
		props: {
			venue: JSON.parse(JSON.stringify(venue.data.attributes)),
			id: venue.data.id,
		},
	}
}

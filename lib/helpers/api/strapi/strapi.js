import { processVenueData } from "./strapi-process-data"

let venues = []

export async function fetchAllVenues(
	staticRender,
	paramString = "?sort[0]=name:asc&filters[currently_operating][$eq]=true&populate=*"
) {
	if (staticRender && venues.length) {
		return venues
	}

	const response = await fetch(
		`${process.env.API_URL}/api/venues${paramString}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.CMS_API_KEY}`,
			},
		}
	)
	const object = await response.json()

	const data = await object.data

	const venueArray = []

	for (const venue of await data) {
		venueArray.push(processVenueData(venue))
	}

	venues = venueArray

	return venueArray
}

export async function fetchVenue(slug, paramString = "?populate=*") {
	const response = await fetch(
		`${process.env.API_URL}/api/venues/${slug}${paramString}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.CMS_API_KEY}`,
			},
		}
	)
	const venue = await response.json()

	return venue
}

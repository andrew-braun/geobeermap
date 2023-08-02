import { processVenueData } from "./strapi-process-data"

export async function fetchAllVenues({
	processData = true,
	paramString = "?sort[0]=name:asc&filters[currently_operating][$eq]=true&populate=*&pagination[limit]=250",
}) {
	console.log(paramString)
	const response = await fetch(
		`${process.env.API_URL}/api/venues${paramString}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.CMS_API_KEY}`,
			},
		}
	)
	const { data } = await response.json()

	if (!processData) {
		return data
	}

	const venueArray = []

	for (const venue of await data) {
		venueArray.push(processVenueData(venue))
	}

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

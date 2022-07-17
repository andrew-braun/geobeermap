import { processVenueData } from "./strapi-process-data"

export async function getStrapiJWT() {
	const requestData = {
		identifier: process.env.STRAPI_API_IDENTIFIER,
		password: process.env.STRAPI_API_PASSWORD,
	}

	const response = await fetch(`${process.env.API_URL}/api/auth/local`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(requestData),
	})

	const data = await response.json()

	const token = data.jwt

	return token
}

export async function fetchAllVenues(paramString = "?populate=*") {
	const strapiJWT = await getStrapiJWT()

	const response = await fetch(
		`${process.env.API_URL}/api/venues${paramString}`,
		{
			headers: {
				Authorization: `Bearer ${strapiJWT}`,
			},
		}
	)
	const object = await response.json()

	const data = await object.data

	const venues = []

	for (const venue of await data) {
		venues.push(processVenueData(venue))
	}

	console.log(venues)

	return venues
}

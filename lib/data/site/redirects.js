async function generateNewSlugRedirects() {
	const response = await fetch(
		`${process.env.API_URL}/api/venues?sort[0]=name:asc&populate=slug`,
		{
			headers: {
				Authorization: `Bearer ${process.env.CMS_API_KEY}`,
			},
		}
	)
	const { data } = await response.json()

	const newSlugRedirects = data.map((venue) => {
		return {
			source: `/${venue.attributes.slug}`,
			destination: `/venues/${venue.attributes.slug}`,
			permanent: true,
		}
	})

	return newSlugRedirects
}

module.exports = { generateNewSlugRedirects }

/* Originally, there was no category segment in the URL. Since the site rebuild,
 ** we've started classifying different items. This function generates redirects
 */
async function generateNewSlugRedirects() {
	const response = await fetch(
		`${process.env.API_URL}/api/venues?sort[0]=name:asc&fields[0]=slug&fields[1]=updatedAt`,
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

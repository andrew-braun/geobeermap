export function processVenueData(venue) {
	const v = venue.attributes
	const { business_information, location, social_links } = v
	const logoURL = business_information.logo.data.attributes.url

	const locations = location.map((loc) => {
		return {
			latitude: loc.latitude,
			longitude: loc.longitude,
			name: loc.name,
			location_id: loc.location_id,
			street_address: loc.street_address,
			city: {
				name: loc.city.data.attributes.name,
				slug: loc.city.data.attributes.slug,
			},
			neighborhood: {
				name: loc.neighborhood.data.attributes.name,
				slug: loc.neighborhood.data.attributes.slug,
			},
		}
	})

	const venueStructure = {
		id: venue.id,
		name: v.name,
		slug: v.slug,
		locale: v.locale,
		description: v.description,
		business_information: {
			business_type: business_information.business_type,
			currently_operating: business_information.currently_operating,
			logo: {
				alternativeText:
					business_information.logo.data.attributes.alternativeText,
				width: business_information.logo.data.attributes.width,
				height: business_information.logo.data.attributes.height,
				url: logoURL,
				relative_url: logoURL.slice(logoURL.indexOf("/image"), logoURL.length),
			},
		},
		location: {
			locations,
			location_count: locations.length,
		},
		social_links,
	}

	return venueStructure
}

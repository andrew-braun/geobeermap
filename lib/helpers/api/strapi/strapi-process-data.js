export function processVenueData(venue) {
	const v = venue.attributes
	const { business_information, location, social_links } = v
	const logoURL = business_information?.logo?.data?.attributes?.url ?? null
	const business_types = [
		business_information?.business_type,
		business_information?.business_type_2 ?? null,
		business_information?.business_type_3 ?? null,
	]
		.filter((type) => type !== null)
		.join(", ")

	const locations = location.map((loc) => {
		return {
			latitude: loc?.latitude,
			longitude: loc?.longitude,
			name: loc?.name,
			location_id: loc?.location_id,
			street_address: loc?.street_address,
			city: {
				name: loc?.city?.data?.attributes?.name,
				slug: loc?.city?.data?.attributes?.slug,
			},
			neighborhood: {
				name: loc?.neighborhood?.data?.attributes?.name ?? null,
				slug: loc?.neighborhood?.data?.attributes?.slug ?? null,
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
			business_type: business_types,
			currently_operating: business_information?.currently_operating,
			logo: {
				alternativeText:
					business_information?.logo?.data?.attributes?.alternativeText ?? null,
				width: business_information?.logo?.data?.attributes?.width ?? null,
				height: business_information?.logo?.data?.attributes?.height ?? null,
				url: logoURL,
				relative_url:
					logoURL?.slice(logoURL?.indexOf("/image"), logoURL?.length) ?? null,
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

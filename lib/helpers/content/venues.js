export function filterVenuesBySearchState({ venues, searchState }) {
	let venueResults = venues.filter((venue) => {
		return searchState.some((result) => result.id === venue.id)
	})

	return venueResults
}

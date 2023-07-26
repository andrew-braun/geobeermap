import { useMemo, useContext } from "react"
import dynamic from "next/dynamic"

import SearchBox from "components/search/SearchBox/SearchBox"
const SidebarItem = dynamic(() => import("./SidebarItem"))

import { SearchContext } from "context/SearchContext"

import { filterVenuesBySearchState } from "lib/helpers/content/venues"

import styles from "./MapSidebar.module.scss"

export default function MapSidebar({ venues, activeVenue, handleVenueClick }) {
	// const [searchState, setSearchState] = useState([])

	const { searchState, setSearchState } = useContext(SearchContext)

	// Format data for search (does passing less data to Fuse make it faster?)
	const searchData = venues.map((venue) => {
		return {
			id: venue.id,
			name: venue.name,
			cities: venue?.location?.locations
				?.map((location) => location.city.name)
				.join(","),
			neighborhoods: venue?.location?.locations
				?.map((location) => location.neighborhood.name)
				.join(","),
			street_addresses: venue?.location?.locations
				?.map((location) => location.street_address)
				.join(","),
		}
	})

	// Set search keys and weights
	const searchKeys = [
		{ name: "name", weight: 2 },
		"cities",
		"neighborhoods",
		"street_addresses",
	]

	/* Create list of venues to display in sidebar
	 ** If search is active, only display venues that match search results
	 ** Also, sort by scores from Fuse search
	 */
	const venueList = useMemo(() => {
		let currentVenues = venues

		if (searchState?.length) {
			let venueResults = filterVenuesBySearchState({ venues, searchState })

			const sortedVenues = venueResults?.sort((a, b) => {
				if (searchState?.length) {
					const aScore = searchState.find((result) => result.id === a.id)?.score
					const bScore = searchState.find((result) => result.id === b.id)?.score

					if (aScore < bScore) {
						return -1
					}
					if (aScore > bScore) {
						return 1
					} else return a.name > b.name ? 1 : -1
				}
			})

			currentVenues = sortedVenues
		} else {
			// If searchState is empty, sort by name
			const sortedVenues = venues?.sort((a, b) => {
				return a.name > b.name ? 1 : -1
			})

			currentVenues = sortedVenues
		}

		// Create list of SidebarItems
		const venueElements = currentVenues.map((venue) => {
			if (!venue.business_information.currently_operating) {
				return
			}
			return (
				<SidebarItem
					venue={venue}
					active={venue.slug === activeVenue}
					onClick={handleVenueClick}
					key={`${venue.slug}-${venue.id}`}
					isInSearchResults={
						searchState?.length
							? searchState.some((result) => result.id === venue.id)
							: true
					}
				/>
			)
		})

		return venueElements
	}, [venues, activeVenue, searchState, handleVenueClick])

	return (
		<aside className={`${styles.mapSidebar}`}>
			<div className={`${styles.searchBoxWrapper}`}>
				<SearchBox
					searchData={searchData}
					keys={searchKeys}
					updateSearchState={setSearchState}
					idsOnly={false}
				/>
			</div>
			{venueList}
		</aside>
	)
}

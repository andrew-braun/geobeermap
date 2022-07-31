import { Fragment } from "react"
import VenueCard from "components/cards/PrimaryCard/PrimaryCard"
import styles from "./VenueList.module.scss"

export default function VenueList({ venues }) {
	const venueItems = venues.map((venue) => {
		const { name, business_information, location, social_info } = venue
		const logo = business_information.logo
		const { locations, location_count } = location

		const locationList = locations.map((loc, index) => (
			<Fragment key={`${loc.name}-${index}`}>
				<span>{loc.neighborhood.name}, </span>
				<span>{loc.city.name}</span>
				{location_count > 1 && <span>+{location_count} more</span>}
			</Fragment>
		))

		return (
			<VenueCard
				venue={venue}
				title={name}
				image={logo}
				data1={locationList}
				key={venue.id}
			/>
		)
	})
	return <section className={`${styles.venues}`}>{venueItems}</section>
}

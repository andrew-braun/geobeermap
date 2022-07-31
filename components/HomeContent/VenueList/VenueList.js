import { Fragment } from "react"
import { MdOutlineLocationOn } from "react-icons/md"

import VenueCard from "components/cards/PrimaryCard/PrimaryCard"
import styles from "./VenueList.module.scss"

export default function VenueList({ venues }) {
	const venueItems = venues.map((venue) => {
		const {
			slug,
			name,
			business_information,
			location,
			business_type,
			social_info,
		} = venue
		const logo = business_information.logo
		const { locations, location_count } = location

		const locationList = locations.map((loc, index) => (
			<Fragment key={`${loc.name}-${index}`}>
				<span style={{ position: "relative", top: "1.5px" }}>
					<MdOutlineLocationOn />
				</span>
				<span>{loc.neighborhood.name},&nbsp;</span>
				<span>{loc.city.name}</span>
				{location_count > 1 && <span>+{location_count} more</span>}
			</Fragment>
		))

		return (
			<VenueCard
				title={name}
				slug={`/venues/${slug}`}
				image={logo}
				tag={business_type}
				data1={locationList}
				key={venue.id}
			/>
		)
	})
	return <section className={`${styles.venues}`}>{venueItems}</section>
}

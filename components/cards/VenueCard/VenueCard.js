import React from "react"
import Image from "next/image"
import styles from "./VenueCard.module.scss"

export default function VenueCard({ venue }) {
	const { name, slug, business_information, location, social_info } = venue

	const logo = business_information.logo
	const { locations, location_count } = location

	const locationList = locations.map((loc, index) => (
		<React.Fragment key={`${loc.name}-${index}`}>
			<span>{loc.neighborhood.name}, </span>
			<span>{loc.city.name}</span>
		</React.Fragment>
	))

	return (
		<article className={`${styles.venueCard}`}>
			<div>
				<div className={`${styles.image}`}>
					<Image
						src={`${logo.url}`}
						alt={logo.alternativeText}
						layout="responsive"
						width={300}
						height={250}
						objectFit="cover"
					/>
				</div>
				<span>{name}</span>

				<div>
					<span>{locations[0].neighborhood.name}, </span>
					<span>{locations[0].city.name}</span>
					{location_count > 1 && <span>+{location_count} more</span>}
				</div>
			</div>
		</article>
	)
}

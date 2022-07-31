import React from "react"
import Image from "next/image"
import styles from "./PrimaryCard.module.scss"

export default function PrimaryCard({ venue, title, slug, image, data1 }) {
	const { location, social_info } = venue

	const { locations, location_count } = location

	const locationList = locations.map((loc, index) => (
		<React.Fragment key={`${loc.name}-${index}`}>
			<span>{loc.neighborhood.name}, </span>
			<span>{loc.city.name}</span>
		</React.Fragment>
	))

	return (
		<article className={`${styles.card}`}>
			<div>
				<div className={`${styles.image}`}>
					<Image
						src={`${image.url}`}
						alt={image.alternativeText}
						layout="responsive"
						width={300}
						height={250}
						objectFit="cover"
					/>
				</div>
				<span>{title}</span>

				<div>{data1}</div>
			</div>
		</article>
	)
}

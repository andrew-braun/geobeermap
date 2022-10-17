import Link from "next/link"
import PrimaryPopup from "../PrimaryPopup.jsx"
import { FaStoreAlt, FaMapMarkerAlt } from "react-icons/fa"

import styles from "./VenuePopup.module.scss"

export default function VenuePopup({ venue, onClose }) {
	return venue.location.locations.map((location, index) => {
		const venueBusinessTypes = [
			venue.business_information.business_type,
			venue.business_information?.business_type_2,
			venue.business_information?.business_type_3,
		].filter((item) => item)

		return (
			<PrimaryPopup
				anchor="top"
				longitude={Number(location.longitude)}
				latitude={Number(location.latitude)}
				onClose={onClose}
				key={index}
			>
				<div className={`${styles.popupContent}`}>
					<Link href={`/venues/${venue.slug}`}>
						<a target="_blank">
							<h2>{venue.name}</h2>
						</a>
					</Link>
					<div className={`${styles.venueInfo}`}>
						<span className={`${styles.infoContainer}`}>
							<span className={`${styles.infoIcon}`}>
								<FaStoreAlt />
							</span>
							<p className={`${styles.infoText}`}>
								{venueBusinessTypes.join(", ")}
							</p>
						</span>
						<span className={`${styles.infoContainer}`}>
							<span className={`${styles.infoIcon}`}>
								<FaMapMarkerAlt />
							</span>
							<p className={`${styles.infoText}`}>{location.name}</p>
						</span>
					</div>
				</div>
			</PrimaryPopup>
		)
	})
}

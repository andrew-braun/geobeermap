import Link from "next/link"
import PrimaryPopup from "../PrimaryPopup.jsx"
import SocialLinks from "components/SocialLinks/SocialLinks"
import { FaStoreAlt, FaMapMarkerAlt } from "react-icons/fa"

import styles from "./VenuePopup.module.scss"

export default function VenuePopup({ venue, onClose }) {
	const { social_links } = venue

	const {
		facebook,
		instagram,
		twitter,
		website,
		untappd,
		youtube,
		google_maps,
	} = social_links

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
						<h2 className={`${styles.title}`}>{venue.name}</h2>
					</Link>
					<div className={`${styles.venueInfo}`}>
						<span className={`${styles.infoContainer}`}>
							<span className={`${styles.infoIcon}`}>
								<FaStoreAlt />
							</span>
							<span className={`${styles.infoText}`}>
								{venueBusinessTypes.join(", ")}
							</span>
						</span>
						<span className={`${styles.infoContainer}`}>
							<span className={`${styles.infoIcon}`}>
								<FaMapMarkerAlt />
							</span>
							<span className={`${styles.infoText}`}>
								<Link href={`${google_maps}`}>
									{location.name}{" "}
									{location.neighborhood.name !== location.name &&
										"- " + location.neighborhood.name}
								</Link>
							</span>
						</span>
					</div>
					<div className={`${styles.socialIcons}`}>
						<SocialLinks
							facebook={facebook}
							instagram={instagram}
							twitter={twitter}
							untappd={untappd}
							website={website}
							google_maps={google_maps}
						/>
					</div>
				</div>
			</PrimaryPopup>
		)
	})
}

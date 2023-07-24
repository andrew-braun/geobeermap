import Image from "next/image"
import Link from "next/link"
import SocialLinks from "components/SocialLinks/SocialLinks"
import { FaMapMarkerAlt } from "react-icons/fa"
import styles from "./VenueSidebar.module.scss"

export default function VenueSidebar({ venue, side }) {
	console.log(venue)
	const locations = venue.location.map((location) => (
		<Link
			key={location.id}
			href={location?.map_link ?? venue.social_links.google_maps}
			target="_blank"
			className={`${styles.locationsList}`}
		>
			<FaMapMarkerAlt size={25} className={`${styles.locationIcon}`} />
			<span className={`${styles.neighborhood}`}>
				{location.neighborhood.data.attributes.name},
			</span>
			<span>{location.city.data.attributes.name}</span>
		</Link>
	))
	console.log(locations)
	return (
		<aside
			className={`${styles.sidebar} ${
				side === "right" ? styles["right"] : styles["left"]
			}`}
		>
			<div className={`${styles.logoWrapper}`}>
				{venue.business_information.logo.data.attributes.url && (
					<Image
						src={venue.business_information.logo.data.attributes.url}
						alt={`${venue.name} logo`}
						fill
						style={{ objectFit: "scale-down" }}
					/>
				)}
			</div>
			<div className={`${styles.sidebarContent}`}>
				<div className={`${styles.socialLinksContainer}`}>
					<SocialLinks {...venue.social_links} />
				</div>
				<div className={`${styles.locations}`}>{locations}</div>
			</div>
		</aside>
	)
}

import { CldImage } from "next-cloudinary"
import Link from "next/link"
import { FaMapMarkerAlt } from "react-icons/fa"

import SocialLinks from "components/SocialLinks/SocialLinks"

import { insertCloudinaryFolder } from "lib/helpers/images/cloudinary"

import styles from "./VenueSidebar.module.scss"

export default function VenueSidebar({ venue, side }) {
	const locations = venue.location.map((location, index) => {
		return (
			<VenueLocation
				venue={venue}
				location={location}
				key={`${location.id}-${index}`}
			/>
		)
	})

	const { business_information } = venue
	const business_types = [
		business_information?.business_type,
		business_information?.business_type_2 ?? null,
		business_information?.business_type_3 ?? null,
	]
		?.filter((type) => !!type)
		.join("/")

	const logo = insertCloudinaryFolder(
		venue?.business_information?.logo?.data?.attributes?.url,
		"logos_new"
	)

	return (
		<aside
			className={`${styles.sidebar} ${
				side === "right" ? styles["right"] : styles["left"]
			}`}
		>
			<div className={`${styles.logoWrapper}`}>
				{logo && (
					<CldImage
						src={logo}
						alt={`${venue.name} logo`}
						fill
						style={{ objectFit: "scale-down" }}
					/>
				)}
			</div>
			<div className={`${styles.sidebarContent}`}>
				<div className={`${styles.businessTypes} ${styles.sidebarItem}`}>
					{business_types && (
						<p className={`${styles.text}`}>{business_types}</p>
					)}
				</div>
				<div className={`${styles.socialLinksContainer} ${styles.sidebarItem}`}>
					<SocialLinks {...venue.social_links} />
				</div>
				<div className={`${styles.locations}`}>{locations}</div>
			</div>
		</aside>
	)
}

function VenueLocation({ venue, location }) {
	const city = location?.city?.data?.attributes?.name
	const neighborhood = location?.neighborhood?.data?.attributes?.name

	return (
		<Link
			key={location.id}
			href={location?.map_link ?? venue?.social_links?.google_maps ?? "#"}
			target="_blank"
			className={`${styles.locationsList} ${styles.sidebarItem}`}
		>
			<FaMapMarkerAlt size={25} className={`${styles.locationIcon}`} />
			<span className={`${styles.neighborhood}`}>
				{neighborhood && neighborhood + ", "}
			</span>
			<span>{city && city}</span>
		</Link>
	)
}

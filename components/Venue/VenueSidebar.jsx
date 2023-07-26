import Image from "next/image"
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import SocialLinks from "components/SocialLinks/SocialLinks"
import { FaMapMarkerAlt } from "react-icons/fa"
import styles from "./VenueSidebar.module.scss"
import { insertCloudinaryFolder } from "lib/helpers/images/cloudinary"

export default function VenueSidebar({ venue, side }) {
	const locations = venue.location.map((location, index) => {
		return (
			<VenueInformation
				venue={venue}
				location={location}
				key={`${location.id}-${index}`}
			/>
		)
	})

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
				<div className={`${styles.socialLinksContainer}`}>
					<SocialLinks {...venue.social_links} />
				</div>
				<div className={`${styles.locations}`}>{locations}</div>
			</div>
		</aside>
	)
}

function VenueInformation({ venue, location }) {
	const city = location?.city?.data?.attributes?.name
	const neighborhood = location?.neighborhood?.data?.attributes?.name

	return (
		<Link
			key={location.id}
			href={location?.map_link ?? venue?.social_links?.google_maps ?? "#"}
			target="_blank"
			className={`${styles.locationsList}`}
		>
			<FaMapMarkerAlt size={25} className={`${styles.locationIcon}`} />
			<span className={`${styles.neighborhood}`}>
				{neighborhood && neighborhood + ", "}
			</span>
			<span>{city && city}</span>
		</Link>
	)
}

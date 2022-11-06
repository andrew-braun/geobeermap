import Image from "next/image"
import SocialLinks from "components/SocialLinks/SocialLinks"
import styles from "./VenueSidebar.module.scss"

export default function VenueSidebar({ venue, side }) {
	// console.log(Object.entries(venue.social_links).map((link) => link))
	return (
		<aside
			className={`${styles.sidebar} ${
				side === "right" ? styles["right"] : styles["left"]
			}`}
		>
			<div className={`${styles.logoWrapper}`}>
				<Image
					src={venue.business_information.logo.data.attributes.url}
					alt={`${venue.name} logo`}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className={`${styles.socialLinksContainer}`}>
				<SocialLinks {...venue.social_links} />
			</div>
		</aside>
	)
}

import Link from "next/link"

import SocialLinks from "components/SocialLinks/SocialLinks"

import styles from "./SidebarItem.module.scss"

export default function SidebarItem({ venue, active, onClick }) {
	const { id, name, slug, location, social_links, business_information } = venue
	const { business_type, currently_operating, logo } = business_information
	const {
		facebook,
		instagram,
		twitter,
		website,
		untappd,
		youtube,
		google_maps,
	} = social_links

	return (
        <article
			id={`${slug}-${id}`}
			className={`${styles.sidebarItem} ${active ? styles.active : ""}`}
			onClick={onClick ? (event) => onClick(event, venue.slug) : ""}
		>
			<div className={`${styles.infoColumn}`}>
				<Link href={`/venues/${slug}`} className={`${styles.link}`}>

                    <h3 className={`${styles.title}`}>{name}</h3>

                </Link>
				<div className={`${styles.type}`}> {business_type}</div>
			</div>
			<div className={`${styles.socialColumn}`}>
				<SocialLinks
					facebook={facebook}
					instagram={instagram}
					twitter={twitter}
					untappd={untappd}
					website={website}
					googleMaps={google_maps}
				/>
			</div>
		</article>
    );
}
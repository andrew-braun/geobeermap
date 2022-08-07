import Link from "next/link"

import SocialLinks from "components/ui/SocialLinks/SocialLinks"

import styles from "./SidebarItem.module.scss"

export default function SidebarItem({ venue, key }) {
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
		<article id={`${slug}-${id}`} className={`${styles.sidebarItem}`}>
			<div className={`${styles.infoColumn}`}>
				<Link href={`/venues/${slug}`}>
					<a className={`${styles.link}`}>
						<h3 className={`${styles.title}`}>{name}</h3>
					</a>
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
	)
}

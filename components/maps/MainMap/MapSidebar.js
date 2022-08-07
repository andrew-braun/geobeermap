import dynamic from "next/dynamic"

const SidebarItem = dynamic(() => import("./SidebarItem"))
import styles from "./MapSidebar.module.scss"

export default function MapSidebar({ venues }) {
	console.log(venues)
	const venueList = venues.map((venue) => {
		if (!venue.business_information.currently_operating) {
			return
		}
		return <SidebarItem venue={venue} key={`${venue.slug}-${venue.id}`} />
	})
	return <aside className={`${styles.mapSidebar}`}>{venueList}</aside>
}

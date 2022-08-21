import dynamic from "next/dynamic"

const SidebarItem = dynamic(() => import("./SidebarItem"))
import styles from "./MapSidebar.module.scss"

export default function MapSidebar({ venues, activeVenue }) {
	console.log(venues)
	const venueList = venues.map((venue) => {
		if (!venue.business_information.currently_operating) {
			return
		}
		return (
			<SidebarItem
				venue={venue}
				active={venue.slug === activeVenue}
				key={`${venue.slug}-${venue.id}`}
			/>
		)
	})
	return <aside className={`${styles.mapSidebar}`}>{venueList}</aside>
}

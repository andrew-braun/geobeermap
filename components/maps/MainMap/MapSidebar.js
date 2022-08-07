import dynamic from "next/dynamic"

const SidebarItem = dynamic(() => import("./SidebarItem"))
import styles from "./MapSidebar.module.scss"

export default function MapSidebar({ venues }) {
	console.log(venues)
	const venueList = venues.map((venue) => {
		return <SidebarItem venue={venue} />
	})
	return <aside className={`${styles.mapSidebar}`}>{venueList}</aside>
}

import SlideIn from "components/ui/SlideIn/SlideIn"

import styles from "./MapSidebar.module.scss"

export default function MapSidebar({ onClick, hidden = false }) {
	return (
		<aside className={`${styles.mapSidebar}`}>
			<h2>Beer</h2>
		</aside>
	)
}

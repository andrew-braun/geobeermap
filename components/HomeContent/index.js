import VenueList from "components/VenueList/VenueList"
import MainMap from "components/maps/MainMap/MainMap"
import styles from "./index.module.scss"

export default function HomeContent({ venues }) {
	return (
		<main>
			<section className={`${styles.venueCards}`}>
				<VenueList venues={venues} />
				<MainMap />
			</section>
		</main>
	)
}

import VenueList from "./VenueList/VenueList"
import styles from "./index.module.scss"

export default function HomeContent({ venues }) {
	return (
		<main>
			<section className={`${styles.venueCards}`}>
				<VenueList venues={venues} />
			</section>
		</main>
	)
}

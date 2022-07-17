import VenueCard from "components/cards/VenueCard/VenueCard"
import styles from "./VenueList.module.scss"

export default function VenueList({ venues }) {
	const venueItems = venues.map((venue) => (
		<VenueCard venue={venue} key={venue.id} />
	))
	return <section className={`${styles.venues}`}>{venueItems}</section>
}

import dynamic from "next/dynamic"
import { Suspense } from "react"

const VenueList = dynamic(() => import("/components/VenueList/VenueList"), {
	suspense: true,
})
const MainMap = dynamic(() => import("/components/maps/MainMap/MainMap"), {
	ssr: false,
})
import styles from "./index.module.scss"

export default function HomeContent({ venues }) {
	return (
		<main className={`${styles.homeContent}`}>
			<div className={`${styles.mapContainer}`}>
				<MainMap venues={venues} />
			</div>

			<section className={`section`}>
				<Suspense fallback={`Loading venues...`}>
					<h2 className={`sectionHeading ${styles.venuesHeading}`}>Venues</h2>

					<VenueList venues={venues} />
				</Suspense>
			</section>
		</main>
	)
}

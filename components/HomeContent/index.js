import dynamic from "next/dynamic"
import { Suspense } from "react"

const VenueList = dynamic(() => import("/components/VenueList/VenueList"), {
	suspense: true,
})
const MainMap = dynamic(() => import("/components/maps/MainMap/MainMap"), {
	suspense: true,
})
import styles from "./index.module.scss"

export default function HomeContent({ venues }) {
	return (
		<main>
			<Suspense fallback={`Loading map...`}>
				<MainMap venues={venues} />
			</Suspense>
			<section>
				<Suspense fallback={`Loading venues...`}>
					<VenueList venues={venues} />
				</Suspense>
			</section>
		</main>
	)
}

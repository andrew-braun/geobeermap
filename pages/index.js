import Head from "next/head"
import Layout from "components/layout/Layout"
import HomeContent from "components/HomeContent"

import { fetchAllVenues } from "/lib/helpers/api/strapi/strapi"
import styles from "./Home.module.scss"

export default function Home({ venues }) {
	return (
		<Layout>
			<div>
				<Head>
					<title>GeoBeerMap</title>
					<meta
						name="description"
						content="A website for finding craft beer in the country of Georgia"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<HomeContent venues={venues} />
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const venues = await fetchAllVenues(true)

	return {
		props: {
			venues,
		},
	}
}

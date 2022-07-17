import Head from "next/head"
import Layout from "components/layout/Layout"

import { fetchAllVenues, getStrapiJWT } from "/lib/helpers/api/strapi"
import styles from "./Home.module.scss"

export default function Home({ venues }) {
	console.log(venues)
	return (
		<Layout>
			<div className={styles.container}>
				<Head>
					<title>GeoBeerMap</title>
					<meta
						name="description"
						content="A website for finding craft beer in the country of Georgia"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main></main>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const venues = await fetchAllVenues()

	return {
		props: {
			venues,
		},
	}
}

import Head from "next/head"

import Layout from "components/layout/Layout"

import styles from "./Home.module.scss"

export default function Home() {
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

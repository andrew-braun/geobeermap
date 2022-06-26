import Head from "next/head"

import Layout from "components/layout/Layout"

import styles from "./Home.module.scss"

export default function Home() {
	return (
		<Layout>
			<div className={styles.container}>
				<Head>
					<title>Create Next App</title>
					<meta
						name="description"
						content="A website for finding craft beer in the country of Georgia"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main>
					<h1>GeoBeerMap</h1>
				</main>
			</div>
		</Layout>
	)
}

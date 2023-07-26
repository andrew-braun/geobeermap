import { NextSeo } from "next-seo"

import HomeContent from "components/HomeContent"

import { fetchAllVenues } from "/lib/helpers/api/strapi/strapi"

import { siteData } from "lib/data/site/site-data"

import styles from "./Home.module.scss"

export default function Home({ venues }) {
	const {
		title: siteTitle,
		url: siteUrl,
		description: siteDescription,
	} = siteData

	console.log(siteTitle, siteUrl, siteDescription)
	return (
		<>
			<NextSeo
				title={`Home - ${siteTitle}`}
				description={siteDescription}
				openGraph={{
					url: `${siteUrl}`,
					title: `${siteTitle}`,
					description: `${siteDescription}`,
					images: [
						{
							url: "/images/brand/geobeermap-square-logo.png",
						},
					],
					site_name: siteTitle,
				}}
			/>
			<HomeContent venues={venues} />
		</>
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

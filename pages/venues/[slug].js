import { NextSeo } from "next-seo"
import markdown from "lib/helpers/content/markdown"

import VenueSidebar from "components/Venue/VenueSidebar"

import { fetchAllVenues } from "lib/helpers/api/strapi/strapi"
import { fetchVenue } from "lib/helpers/api/strapi/strapi"

import { siteData } from "lib/data/site/site-data"

import styles from "./Venue.module.scss"
import UtilityIcon from "components/ui/icons/UtilityIcon"

export default function Venue({ venue }) {
	const { title: siteTitle, url: siteUrl } = siteData

	if (!venue) return null

	return (
		<>
			<NextSeo
				title={`${venue.name} - ${siteTitle}`}
				description={`Looking for a craft beer in Georgia? ${venue.name} in ${venue.location[0].city} is a great place to start!`}
				openGraph={{
					url: `${siteUrl}/venues/${venue.slug}`,
					title: `${venue.name} - ${siteTitle}`,
					description: `Looking for a craft beer in Georgia? ${venue.name} in ${venue.location[0].city} is a great place to start!`,
					images: [
						{
							url:
								venue?.business_information?.logo?.data?.attributes?.url ??
								null,
						},
					],
					site_name: siteTitle,
				}}
			/>
			<div
				className={`${styles.venue} section
		`}
			>
				<VenueSidebar venue={venue} side="left" />
				<main className={`${styles.content}`}>
					{!venue.business_information.currently_operating && (
						<div className={`${styles.notOperatingAlert}`}>
							<UtilityIcon icon="warning" color="var(--primary-text)" />
							<span className={`${styles.text}`}>
								This business is permanently or temporarily closed
							</span>
						</div>
					)}
					<section className={`${styles.text}`}>
						<h2 className={`sectionHeading`}>{venue.name}</h2>
						<div
							dangerouslySetInnerHTML={{ __html: markdown(venue.description) }}
						/>
					</section>
				</main>
			</div>
		</>
	)
}

export async function getStaticPaths() {
	const venues = await fetchAllVenues({
		processData: false,
		paramString: "?fields=slug",
	})

	const venueSlugs = venues.map((venue) => {
		return {
			params: {
				slug: venue.slug,
			},
		}
	})

	return {
		paths: [...venueSlugs],
		fallback: false, // can also be true or 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const slug = params.slug

	const venue = await fetchVenue(slug)

	return {
		props: {
			venue: JSON.parse(JSON.stringify(venue?.data?.attributes)) ?? null,
			id: venue.data.id,
		},
	}
}

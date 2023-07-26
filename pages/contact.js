import { NextSeo } from "next-seo"
import ContactForm from "components/forms/ContactForm"

import { siteData } from "lib/data/site/site-data"

import styles from "./contact.module.scss"

export default function Contact({}) {
	const { title: siteTitle, url: siteUrl } = siteData
	return (
		<>
			<NextSeo
				title={`Contact - ${siteTitle}`}
				description={`Get in touch with GeoBeerMap ${siteTitle} using our contact form`}
			/>

			<main className={`section`}>
				<div className={`${styles.contactContainer}`}>
					<h1>Contact Us</h1>
					<ContactForm />
				</div>
			</main>
		</>
	)
}

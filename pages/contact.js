import { NextSeo } from "next-seo"
import { FaGithub } from "react-icons/fa"

import ContactForm from "components/forms/ContactForm"
import PrimaryButton from "components/ui/buttons/PrimaryButton"

import { siteData } from "lib/data/site/site-data"
import { iconSizes } from "styles/style-variables"

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
					<div className={`${styles.gitHubButtonWrapper}`}>
						{" "}
						<PrimaryButton
							variation="outline"
							icon={<FaGithub size={iconSizes.medium} />}
							link="https://github.com/andrew-braun/geobeermap"
							target="_blank"
						>
							GitHub Repository
						</PrimaryButton>
					</div>
				</div>
			</main>
		</>
	)
}

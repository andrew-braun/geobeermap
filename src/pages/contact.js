import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./contact.module.css"

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="contact" />
				<div className={styles.contactContainer}>
					<div className={styles.contactHeader}>
						<h1>Contact Us</h1>
						<p>
							Know about a new brewery? Have a comment or correction? Let us
							know!
						</p>
					</div>
					<div className={styles.contactMethods}>
						<a
							className={styles.contactButton}
							href="mailto:andrew@andrewbraun.dev"
						>
							Email Us
						</a>
						<a
							className={styles.contactButton}
							href="https://github.com/andrew-braun/geobeermap"
						>
							GitHub Repository
							<span className={styles.icon}>
								<AiOutlineGithub />
							</span>
						</a>
					</div>
				</div>
			</Layout>
		)
	}
}

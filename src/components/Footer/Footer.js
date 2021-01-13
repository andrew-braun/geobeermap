import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AiOutlineGithub } from "react-icons/ai"
import "../../styles/global.css"
import styles from "./footer.module.css"

const Footer = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						subtitle
					}
				}
			}
		`
	)

	const { title, subtitle } = data.site.siteMetadata

	return (
		<footer className={styles.mainFooter}>
			<div className={styles.footerInfo}>
				{title} - made with{" "}
				<span className="emoji">
					&#128150; and &#127866; by{" "}
					<a href="https://andrewbraun.dev" target="_blank">
						Andrew Braun
					</a>
				</span>
			</div>
			<div className={styles.footerLinks}>
				<a
					href="https://github.com/andrew-braun/geobeermap"
					target="_blank"
					className={styles.footerLink}
				>
					<AiOutlineGithub />
				</a>
			</div>
		</footer>
	)
}

export default Footer

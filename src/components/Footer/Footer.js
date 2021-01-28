import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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

	const { title } = data.site.siteMetadata

	return (
		<footer className={styles.mainFooter}>
			<div className={styles.footerInfo}>
				<span className={styles.siteTitle}>{title}</span> - made with
				<span className="emoji" role="img" aria-label="emoji">
					&#128150;
				</span>
				and
				<span className="emoji" role="img" aria-label="emoji">
					&#127866;
				</span>
				by&nbsp;
				<a
					href="https://andrewbraun.dev"
					target="_blank"
					rel="noreferrer noopener"
				>
					Andrew Braun
				</a>
			</div>
			<div className={styles.footerLinks}>
				<a
					href="https://github.com/andrew-braun/geobeermap"
					target="_blank"
					rel="noreferrer noopener"
					className={styles.footerLink}
				>
					<AiOutlineGithub />
				</a>
			</div>
		</footer>
	)
}

export default Footer

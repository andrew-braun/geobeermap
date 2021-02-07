import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import "../../styles/global.css"
import HamburgerContainer from "../HamburgerMenu/HamburgerContainer"
import Nav from "../Nav/Nav"
import styles from "./header.module.css"

const Header = () => {
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

	/* Comment/uncomment these add/delete nav items here */
	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Contact", path: "/contact" },
		// { name: "Blog", path: "/blog" },
	]

	return (
		<header className={styles.mainHeader}>
			<div className={styles.siteIdentity}>
				<Link to="/">
					<div className={styles.siteTitle}>{title}</div>
				</Link>
				<div className={styles.siteDescription}>{subtitle}</div>
			</div>

			<Nav navItems={navItems} />
			<HamburgerContainer navItems={navItems} />
		</header>
	)
}

export default Header

import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../../styles/global.css"
import styles from "./header.module.css"
import HamburgerContainer from "../HamburgerMenu/HamburgerContainer"
import Nav from "../Nav/Nav"

const Header = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	)

	const { title, description } = data.site.siteMetadata

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Blog", path: "/blog" },
	]

	return (
		<header className={styles.mainHeader}>
			<div className={styles.siteIdentity}>
				<Link to="/">
					<div className={styles.siteTitle}>{title}</div>
				</Link>
				<div className={styles.siteDescription}>{description}</div>
			</div>
			<Nav navItems={navItems} />
			<HamburgerContainer navItems={navItems} />
		</header>
	)
}

export default Header

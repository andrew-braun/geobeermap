import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../../styles/global.css"
import styles from "./header.module.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu/HamburgerMenu"
import Hamburger from "../HamburgerMenu/Hamburger/Hamburger"
import Nav from "../Nav/Nav"

const Header = ({ props }) => {
	const [menuOpen, setMenuOpen] = useState(false)

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
	return (
		<header className={styles.mainHeader}>
			<div className={styles.siteIdentity}>
				<Link to="/">
					<div className={styles.siteTitle}>{data.site.siteMetadata.title}</div>
				</Link>
				<div className={styles.siteDescription}>
					{data.site.siteMetadata.description}
				</div>
			</div>
			<Nav />
			<div className={styles.hamburgerMenuGridContainer}>
				<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</header>
	)
}

export default Header

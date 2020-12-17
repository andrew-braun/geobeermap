import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../../styles/global.css"
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
			<HamburgerContainer />
		</header>
	)
}

export default Header

import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from "./SEO"
import Header from "./Header/Header"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu/HamburgerMenu"
import Hamburger from "./HamburgerMenu/Hamburger/Hamburger"
import "./layout.css"

const Layout = ({ children }) => {
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
		<div className="main-grid">
			<SEO />
			<Header />
			<main className="main-container">{children}</main>
			<footer className="main-footer">
				<p>Made by Andrew Braun</p>
			</footer>
		</div>
	)
}

export default Layout

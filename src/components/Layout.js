import React from "react"
import SEO from "./SEO"
import Header from "./Header/Header"
import "./layout.css"

const Layout = ({ children }) => {
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

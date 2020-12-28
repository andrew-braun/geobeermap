import React from "react"
import "../styles/global.css"
import "./styles/index.css"
import Layout from "../components/Layout.js"
import AppContainer from "../components/MainMap/AppContainer"
import SEO from "../components/SEO"
// import styles from "./index.module.css"

export default () => {
	return (
		<Layout>
			<div className="index-page">
				<SEO title="Home" />
				<AppContainer />
			</div>
		</Layout>
	)
}

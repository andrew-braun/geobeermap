import { useContext } from "react"
import Head from "next/head"
import Layout from "components/layout/Layout"
import Favicon from "components/meta/Favicon"
import "../styles/globals.scss"
import { SearchProvider } from "context/SearchContext"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<Favicon />
			</Head>
			<SearchProvider>
				<Component {...pageProps} />
			</SearchProvider>
		</Layout>
	)
}

export default MyApp

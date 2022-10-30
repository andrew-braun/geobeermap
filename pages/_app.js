import Head from "next/head"
import Layout from "components/layout/Layout"
import Favicon from "components/meta/Favicon"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<Favicon />
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp

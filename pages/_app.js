import Head from "next/head"
import Favicon from "components/meta/Favicon"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<Favicon />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

import { Ubuntu } from "next/font/google"

import Head from "next/head"

import Layout from "components/layout/Layout"

import { SearchProvider } from "context/SearchContext"

import Favicon from "components/meta/Favicon"

import "../styles/globals.scss"

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
})

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<Favicon />
			</Head>
			<style jsx global>{`
				html {
					font-family: ${ubuntu.style.fontFamily};
				}
			`}</style>

			<Layout>
				<SearchProvider>
					<Component {...pageProps} />
				</SearchProvider>
			</Layout>
		</>
	)
}

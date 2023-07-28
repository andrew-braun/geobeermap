import Script from "next/script"
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
			<Script
				strategy="afterInteractive"
				id="google-tag-manager"
			>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-5VDTQ4QT');`}</Script>

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

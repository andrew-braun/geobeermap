import Script from "next/script"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head></Head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VDTQ4QT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				></noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

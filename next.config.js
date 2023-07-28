/** @type {import('next').NextConfig} */
const { generateNewSlugRedirects } = require("./lib/data/site/redirects")

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
		// loader: "cloudinary",
		// path: "res.cloudinary.com/geobeermap",
	},
	redirects: async () => {
		const newSlugRedirects = await generateNewSlugRedirects()

		return [...newSlugRedirects]
	},
}

module.exports = nextConfig

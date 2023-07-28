/** @type {import('next').NextConfig} */
const { generateNewSlugRedirects } = require("./lib/data/site/redirects")

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		nextScriptWorkers: true,
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	redirects: async () => {
		const newSlugRedirects = await generateNewSlugRedirects()

		return [...newSlugRedirects]
	},
}

module.exports = nextConfig

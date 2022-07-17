/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
		// loader: "cloudinary",
		// path: "res.cloudinary.com/geobeermap",
	},
}

module.exports = nextConfig

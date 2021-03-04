/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Disable search engine crawls on deploy previews

const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = "https://www.example.com",
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `markdown-pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/assets`,
				name: `assets`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/entries`,
				name: `entries`,
			},
		},
		{
			resolve: "gatsby-plugin-react-leaflet",
			options: {
				linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: "*" }],
					},
					"branch-deploy": {
						policy: [{ userAgent: "*", disallow: ["/"] }],
						sitemap: null,
						host: null,
					},
					"deploy-preview": {
						policy: [{ userAgent: "*", disallow: ["/"] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Recursive\:300,400,500,600,700`,
					`Expletus Sans\:400,500,600,700,400i,500i,600i,700i`,
				],
				display: "swap",
			},
		},
		// `gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
	siteMetadata: {
		title: `GeoBeerMap`,
		subtitle: `Find craft beer in Georgia`,
		titleTemplate: "%s · Georgian Craft Beer",
		author: "Andrew Braun",
		description: `Find craft beer in the country of Georgia! All the best breweries, bars, and retailers in Tbilisi, Batumi, and beyond.`,
		url: "https://geobeermap.com",
		image: "/images/logo/square-logo.png",
		siteUrl: `https://geobeermap.com`,
	},
}

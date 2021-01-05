/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
		`gatsby-plugin-mdx`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
	],
	siteMetadata: {
		title: `GeoBeerMap`,
		titleTemplate: "%s · Georgian Craft Beer",
		author: "Andrew Braun",
		description: `Find craft beer in Georgia`,
		url: "https://geobeermap.com",
		image: "/images/logo/square-logo.png",
	},
}

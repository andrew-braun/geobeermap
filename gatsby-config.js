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
		// `gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
	],
	siteMetadata: {
		title: `GeoBeerMap`,
		titleTemplate: "%s · Georgian Craft Beer",
		author: "Andrew Braun",
		description: `Find craft beer in Georgia`,
		url: "https://geobeermap.com",
		image: "/images/logo/square-logo.png",
		siteUrl: `https://geobeermap.com`,
	},
}

import { fetchAllVenues } from "lib/helpers/api/strapi/strapi"
import { siteData } from "lib/data/site/site-data"

//pages/sitemap.xml.js

function generateSiteMap({ venues }) {
	const venueEntries = venues
		.map((venue) => {
			return `
                <url>
                <loc>${`${siteData.url}/venues/${venue?.attributes?.slug}`}</loc>
                <lastmod>${venue?.attributes?.updatedAt}</lastmod>
                <changfreq>monthly</changfreq>
                </url>
            `
		})
		.join("")

	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>${siteData.url}</loc>
     </url>
     <url>
       <loc>${siteData.url}/contact</loc>
     </url>
     ${venueEntries}

   </urlset>
 `
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// We make an API call to gather the URLs for our site

	const venueData = await fetchAllVenues({
		processVenue: false,
		data: "minimal",
		paramString: "?sort[0]=slug:asc&fields[0]=slug&fields[1]=updatedAt",
	})

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap({ venues: venueData })

	res.setHeader("Content-Type", "text/xml")

	// Send the XML to the browser
	res.write(`${sitemap}`)
	res.end()

	return {
		props: {},
	}
}

export default SiteMap

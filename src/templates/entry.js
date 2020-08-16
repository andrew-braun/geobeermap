import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import styles from "./entry.module.css"

export default function entryTemplate({ data }) {
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { entry } = data.allEntriesJson.edges

  const entry = data.allEntriesJson.edges[0].node

  return (
    <Layout>
      <div className={styles.entryContainer}>
        <header className={styles.entryHeader}>
          <h1>{entry.name}</h1>
        </header>
        <aside className={styles.entrySidebar}>
          <h1 className={styles.entrySidebarTitle}>{entry.name}</h1>
          <div className={styles.socialBox}>
            <SocialButtons 
              facebook={entry.facebook}
              instagram={entry.instagram}
              twitter={entry.twitter}
              untappd={entry.untappd}
              website={entry.website}
              googlemaps={entry.googlemaps}
              />
          </div>
          <table className={styles.infoTable}>
            <tr className={styles.infoRow}>
              <td className={styles.infoCell}>Type:</td> 
              <td className={styles.infoCell}>{entry.type}</td>
            </tr>
            <tr className={styles.infoRow}>
              <td className={styles.infoCell}>Operational:</td> 
              <td className={styles.infoCell}>{ entry.open ? "Yes" : "No" }</td>
            </tr>
            <tr className={styles.infoRow}>
              <td className={styles.infoCell}>City:</td> 
              <td className={styles.infoCell}>{entry.city}, {entry.country}</td>
            </tr>
          </table>
        </aside>
        <main className={styles.entryMain}>
          {entry.body}
        </main>
      </div>
    </Layout>
  )
}

export const data = 
    graphql`
        query entryQuery($path: String!) {
            allEntriesJson(filter: {path: {eq: $path}}) {
                edges {
                    node {
                        id
                        facebook
                        googlemaps
                        instagram
                        coordinates
                        address
                        city
                        country
                        name
                        open
                        title
                        twitter
                        untappd
                        type
                        website
                        body
                        path
                    }
                }
            }
        }
    `

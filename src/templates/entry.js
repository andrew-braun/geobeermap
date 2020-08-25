import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown/with-html"
import Layout from "../components/Layout"
import SocialButtons from "../components/SocialButtons/SocialButtons"
import styles from "./entry.module.css"
import "./entry.css"

export default function entryTemplate({ data }) {
  const entry = data.allEntriesJson.edges[0].node
    
  return (
    <Layout>
      <div className={styles.entryContainer}>
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
          <div className={styles.entryWebsite}>
            <a href={entry.website}>Website</a>
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
        <main className={styles.entryMain} tabIndex="-1">
          <ReactMarkdown source={entry.body}
            className="entry-body"
            escapeHtml={false}
            />
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

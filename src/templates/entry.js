import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
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
          <div className={styles.infoBox}>
            <div className={styles.infoBoxSection}>
              {entry.type}
            </div>
            <div className={styles.infoBoxSection}>
              {entry.open}
            </div>
          </div>
        </header>
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
                        name
                        open
                        title
                        twitter
                        type
                        website
                        body
                        path
                    }
                }
            }
        }
    `

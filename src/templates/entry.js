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
          <div className={styles.infoBox}>
            <div className={styles.infoBox}>
              {entry.type}
            </div>
            <div className={styles.infoBox}>
              {entry.open}
            </div>
          </div>
          <div className={styles.SocialBox}>
            <SocialButtons 
              facebook={entry.facebook}
              instagram={entry.instagram}
              />
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

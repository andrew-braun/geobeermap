import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function entryTemplate({ data }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{data.allEntriesJson.edges[1].node.name}</h1>
          <div
            className="blog-post-content"
          />
        </div>
      </div>
    </Layout>
  )
}

export const data = 
    graphql`
        query entryQuery {
            allEntriesJson {
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

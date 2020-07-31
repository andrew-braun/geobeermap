import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout.js"

export default () => {
  return (
  <React.Fragment>
    <Layout >
      <div>Hello world!</div>
      <p><Link to="/blog">View Blog</Link></p>
    </Layout>
  </React.Fragment>
  )
}

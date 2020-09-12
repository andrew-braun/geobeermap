import React from 'react'
import "../styles/global.css"
import Layout from "../components/Layout"
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
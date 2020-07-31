import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout.js"
import "./styles/index.css"

export default () => {
  return (
    <Layout >
      <div class="frontpage-main-content">
        <section className="info-bar-section">
          <p>Info bar</p>
        </section>
        <section className="map-section">
          <p>Map</p>
        </section>
      </div>
    </Layout>
  )
}

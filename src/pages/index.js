import React from "react"
import Layout from "../components/Layout.js"
import MainMap from "../components/MainMap/MainMap"
import "./styles/index.css"

export default () => {
  return (
    <Layout >
      <div class="frontpage-main-content">
        <section className="info-bar-section">
        </section>
        <section className="map-section">
          <MainMap />
        </section>
      </div>
    </Layout>
  )
}

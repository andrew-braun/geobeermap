import React from "react"
import Layout from "../components/Layout.js"
import MainMap from "../components/MainMap/MainMap"
import styles from "./index.module.css"

export default () => {
  return (
    <Layout >
      <div className={styles.frontpageMainContent}>
        <section className={styles.mapSection}>
          <MainMap />
        </section>
      </div>
    </Layout>
  )
}

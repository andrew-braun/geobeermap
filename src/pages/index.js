import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout.js"
import MainMap from "../components/MainMap/MainMap"
import AppContainer from "../components/MainMap/AppContainer"
import styles from "./index.module.css"

export default () => {
  return (
    <Layout >
        <AppContainer />
    </Layout>
  )
}

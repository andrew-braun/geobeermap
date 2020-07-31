import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from "./mainmap.module.css"

export default class MainMap extends Component {
    static propTypes = {
        position: PropTypes.array,
        zoom: PropTypes.number,
        markerText: PropTypes.string
    }
    static defaultProps = {
        position: [51, -1],
        zoom: 13,
        markerText: ""
    }
    render() {
        const { options } = this.props

        if (typeof window !== 'undefined') {
            return (
                <div id={styles.mainMapId}>
                    <Map center={this.props.position} zoom={this.props.zoom}>
                        <TileLayer
                            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                    </Map>
                </div>
            )
        }
        return null
    }
}
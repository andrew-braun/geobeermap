import React, { Component } from './node_modules/react'
import { Map } from './node_modules/react-leaflet'

export default class MyMap extends Component {
    render() {
        const { options } = this.props

        if (typeof window !== 'undefined') {
            return (
                <Map {...options}>

                </Map>
            )
        }
        return null
    }
}
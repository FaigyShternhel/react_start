
import React, { Component } from 'react'
// import CarsList from './carsList'
import ParentComp from './parentComp '
import CarsList from './carsList'

export default class AppHw extends Component {
    render() {
        return (
            <React.Fragment>
                <hr />
                <hr />
                <CarsList />
                <ParentComp />
                <hr />
            </React.Fragment>
        )
    }
}
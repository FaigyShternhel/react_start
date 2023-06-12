
import React, { Component } from 'react'
// import CarsList from './carsList'
import ParentComp from './parentComp'
import AppHw from './comp_HW/appHw'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <AppHw />
        <hr />
      </React.Fragment>
    )
  }
}
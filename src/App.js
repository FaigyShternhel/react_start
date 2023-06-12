
import React, { Component } from 'react'
import AppTv from './hooks_comps/appTv'
import AppWeather from './hooks_comps/appWeather'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <AppWeather />
        <hr />
      </React.Fragment>
    )
  }
}
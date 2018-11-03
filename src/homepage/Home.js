import React, { Fragment } from 'react'
import Sections from './Sections'
import handleScroll from './handleScroll'
import NavBar from '../navBar/NavBar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeStep: 0 }
    this.handleScroll = handleScroll.bind(this)
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Sections handleScroll={this.handleScroll} />
      </Fragment>
    )
  }
}

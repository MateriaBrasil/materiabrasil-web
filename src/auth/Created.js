import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  constructor(props) {
    super(props)
    const { created, setCurrentUser } = props

    setCurrentUser(created)
  }

  render() {
    const { location } = this.props
    const { state } = location
    const path = (state && state.referrer) || '/'

    return <Redirect to={path} />
  }
}

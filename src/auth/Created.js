import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  constructor(props) {
    super(props)
    const { created, currentUser } = props
    const { actions } = currentUser
    const { set } = actions

    set(created)
  }

  render() {
    return <Redirect to={'/'} />
  }
}

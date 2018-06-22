import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  constructor(props) {
    super(props)
    const { created, user } = props
    const { actions } = user
    const { setCurrent } = actions

    setCurrent({ ...created })
  }

  render() {
    return <Redirect to={'/'} />
  }
}

import { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    const { setCurrentUser } = props

    setCurrentUser(null)
    localStorage.removeItem('authCredentials')
  }

  render() {
    return null
  }
}

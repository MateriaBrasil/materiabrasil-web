import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loading from '../Loading'
import Error from '../Error'

import List from './List'

import * as actions from './actions'

class Materials extends Component {
  async componentWillMount() {
    const { actions, list } = this.props

    if (list) {
      actions.startUp()
    } else {
      actions.list()
    }
  }

  render() {
    const { startingUp, listing, listError } = this.props

    if (startingUp || listing) {
      return <Loading />
    }

    if (listError) {
      return <Error>{listError}</Error>
    }

    return <List {...this.props} />
  }
}

export default connect(
  state => ({ ...state.materials }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Materials)

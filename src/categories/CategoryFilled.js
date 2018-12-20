import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

export default connect(
  state => ({ ...state.categoryFilled }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    render() {
      const { render, ...props } = this.props

      return <Fragment>{render(props)}</Fragment>
    }
  },
)

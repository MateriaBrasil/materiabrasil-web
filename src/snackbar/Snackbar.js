import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

import Widget from './Widget'

export default connect(
  state => ({ ...state.snackbar }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    render() {
      const { render, ...props } = this.props

      return (
        <Fragment>
          <Widget {...props} />
          {render(props)}
        </Fragment>
      )
    }
  },
)

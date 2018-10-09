import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

import * as actions from './actions'

import Widget from './Widget'

export default connect(
  state => ({ ...state.comparison }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    render() {
      const { render, ...props } = this.props
      const { list } = props

      if (isEmpty(list)) {
        return render(props)
      }

      return (
        <Fragment>
          <Widget {...props} />
          {render(props)}
        </Fragment>
      )
    }
  },
)

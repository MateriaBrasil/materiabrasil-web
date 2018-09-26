import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

export default connect(
  state => ({ ...state.comparisons }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    render() {
      const { render, ...props } = this.props

      return render(props)
    }
  },
)

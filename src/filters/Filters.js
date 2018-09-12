import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

export default connect(
  state => ({ ...state.filters }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    render() {
      const { render } = this.props

      return render(this.props)
    }
  },
)

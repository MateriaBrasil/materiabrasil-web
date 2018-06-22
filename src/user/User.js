import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'

class User extends Component {
  render() {
    const { render } = this.props

    return render(this.props)
  }
}

export default connect(
  state => ({ ...state.user }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(User)

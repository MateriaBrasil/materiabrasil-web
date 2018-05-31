import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import renderInfo from '../renderInfo'

import * as actions from './actions'

class Material extends Component {
  async componentWillMount() {
    const { actions, match } = this.props
    const { params } = match
    const { id } = params
    const { info } = actions
    await info(id)
  }

  render() {
    return renderInfo(this.props)
  }
}

export default connect(
  state => ({ ...state.material }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Material)

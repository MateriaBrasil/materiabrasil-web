import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'

import Info from './Info'
import Error from '../Error'

import * as actions from './actions'

class Material extends Component {
  async componentWillMount() {
    const { actions, match } = this.props
    const { params } = match
    const { materialId } = params
    const { info, startUp } = actions
    await info(materialId)
    startUp()
  }

  render() {
    console.log(this.props)
    const { startingUp, requestingInfo, infoError } = this.props

    if (startingUp || requestingInfo) {
      return <LinearProgress />
    }

    if (infoError) {
      return <Error>{infoError}</Error>
    }

    return <Info {...this.props} />
  }
}

export default connect(
  state => ({ ...state.material }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Material)

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

export default connect(
  state => ({ ...state.filters }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  class extends Component {
    constructor(props) {
      super(props)

      const { actions, list } = props
      actions.setCategories(list)
    }

    render() {
      const { render } = this.props

      return render(this.props)
    }
  },
)

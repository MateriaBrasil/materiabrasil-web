import React, { Component } from 'react'
import map from 'lodash/map'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
    }
    this.changeRate = this.changeRate.bind(this)
  }

  changeRate(value) {
    const { onChange } = this.props
    onChange(value)
    this.setState({ rating: value })
  }

  render() {
    return (
      <div>
        {map(
          [1, 2, 3, 4, 5],
          value =>
            this.state.rating < value ? (
              <StarBorder
                color="primary"
                key={value}
                onClick={() => this.changeRate(value)}
              />
            ) : (
              <Star
                color="primary"
                key={value}
                onClick={() => this.changeRate(value)}
              />
            ),
        )}
      </div>
    )
  }
}

import React, { Component } from 'react'
import map from 'lodash/map'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import StarHalf from '@material-ui/icons/StarHalf'

export default class extends Component {
  render() {
    const { averageRating } = this.props

    return (
      <div>
        {averageRating &&
          map([1, 2, 3, 4, 5], value => {
            if (averageRating >= value || value - averageRating < 0.25) {
              return <Star color="primary" key={value} />
            }
            if (value - averageRating >= 0.75) {
              return <StarBorder color="primary" key={value} />
            }
            return <StarHalf color="primary" key={value} />
          })}
      </div>
    )
  }
}

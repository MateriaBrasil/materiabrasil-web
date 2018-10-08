import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

export default props => {
  const { firstDriver, secondDriver, thirdDriver, fourthDriver } = props

  if (!(firstDriver && secondDriver && thirdDriver && fourthDriver)) {
    return null
  }

  const { current, comparison } = props

  const data = [
    { subject: 'Driver #1', value: firstDriver },
    { subject: 'Driver #2', value: secondDriver },
    { subject: 'Driver #3', value: thirdDriver },
    { subject: 'Driver #4', value: fourthDriver },
  ]

  return (
    <Fragment>
      <div style={{ overflow: 'auto' }}>
        <Typography
          variant="title"
          color="textSecondary"
          style={{ float: 'left', marginTop: 8 }}
        >
          Características
        </Typography>
        <Button
          color="primary"
          style={{ float: 'right' }}
          onClick={() => comparison.actions.add(current)}
        >
          <Icon style={{ marginRight: 10 }}>add_circle</Icon> Comparar
        </Button>
      </div>
      <RadarChart width={420} height={420} outerRadius="50%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={45} domain={[0, 10]} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#239eb1"
          fill="#239eb1"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Fragment>
  )
}

import React, { Fragment } from 'react'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

import CaptionWithText from './CaptionWithText'

export default ({ firstDriver, secondDriver, thirdDriver, fourthDriver }) => {
  if (!(firstDriver && secondDriver && thirdDriver && fourthDriver)) {
    return null
  }

  const data = [
    { subject: 'Driver #1', value: firstDriver },
    { subject: 'Driver #2', value: secondDriver },
    { subject: 'Driver #3', value: thirdDriver },
    { subject: 'Driver #4', value: fourthDriver },
  ]

  return (
    <Fragment>
      <CaptionWithText caption="Características" />
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

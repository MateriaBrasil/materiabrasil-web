import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

import drivers from '../../drivers'
import addComparison from './addComparison'

export default props => {
  const {
    materialityDriver,
    manufactureDriver,
    managementDriver,
    socialDriver,
  } = props

  const hasDrivers =
    materialityDriver && manufactureDriver && managementDriver && socialDriver

  const data = [
    { subject: drivers[0].name, value: materialityDriver },
    { subject: drivers[1].name, value: manufactureDriver },
    { subject: drivers[2].name, value: managementDriver },
    { subject: drivers[3].name, value: socialDriver },
  ]

  return (
    <Fragment>
      <div style={{ overflow: 'auto' }}>
        <Typography
          variant="h6"
          color="textSecondary"
          style={{ float: 'left', marginTop: 8 }}
        >
          Características
        </Typography>
        {hasDrivers && (
          <Button
            color="primary"
            style={{ float: 'right' }}
            onClick={addComparison(props)}
          >
            <AddIcon style={{ marginRight: 10 }} /> Comparar
          </Button>
        )}
      </div>
      {hasDrivers ? (
        <RadarChart
          width={320}
          height={320}
          outerRadius="50%"
          data={data}
          style={{ margin: '0 auto' }}
        >
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
      ) : (
        <Typography>Este material ainda não possui indicadores</Typography>
      )}
    </Fragment>
  )
}

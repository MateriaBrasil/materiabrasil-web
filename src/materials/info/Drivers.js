import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import drivers from '../../drivers'
import addComparison from './addComparison'
import chartsStyle from '../../chartsStyle'

export default withStyles(chartsStyle)(props => {
  const {
    materialityDriver,
    manufactureDriver,
    managementDriver,
    socialDriver,
  } = props

  const DRIVER_MIN_NUMBER = 0
  const DRIVER_MAX_NUMBER = 4

  const normalizedNumber = number => {
    if (number < DRIVER_MIN_NUMBER) {
      return DRIVER_MIN_NUMBER
    }
    if (number > DRIVER_MAX_NUMBER) {
      return DRIVER_MAX_NUMBER
    }
    return number
  }

  const hasDrivers =
    normalizedNumber(materialityDriver) ||
    normalizedNumber(manufactureDriver) ||
    normalizedNumber(managementDriver) ||
    normalizedNumber(socialDriver)

  const hasAllDrivers =
    materialityDriver && manufactureDriver && managementDriver && socialDriver

  const data = [
    { subject: drivers[0].name, value: normalizedNumber(materialityDriver) },
    { subject: drivers[1].name, value: normalizedNumber(manufactureDriver) },
    { subject: drivers[2].name, value: normalizedNumber(managementDriver) },
    { subject: drivers[3].name, value: normalizedNumber(socialDriver) },
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
        {hasAllDrivers && (
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
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart
            outerRadius="50%"
            data={data}
            className={props.classes.radar}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 4]} tick={false} />
            <Radar
              name="Mike"
              dataKey="value"
              stroke="#239eb1"
              fill="#239eb1"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <Typography>Este material ainda não possui indicadores</Typography>
      )}
    </Fragment>
  )
})

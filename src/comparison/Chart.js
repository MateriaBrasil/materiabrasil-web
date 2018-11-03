import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import get from 'lodash/get'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from 'recharts'

import ChipsContainer from './ChipsContainer'
import Colors from './Colors'
import drivers from '../drivers'

export default ({ list, actions: { close, remove } }) => {
  const data = map(drivers, (driver, index) =>
    reduce(
      list,
      (object, material) => ({
        ...object,
        [material.id]: get(material, driver.key),
      }),
      { subject: driver.name },
    ),
  )

  return (
    <Drawer open anchor="bottom" onClose={close}>
      <Button variant="contained" color="primary" onClick={close}>
        Comparação de materiais
        <Icon style={{ marginLeft: 8 }} />
      </Button>
      <Paper>
        <Grid
          container
          spacing={16}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            xs={12}
            style={{ textAlign: 'center', marginBottom: 30 }}
          >
            <RadarChart
              width={320}
              height={320}
              style={{ display: 'inline-flex' }}
              outerRadius="50%"
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={45} domain={[0, 10]} />
              {map(list, ({ id, name }, index) => (
                <Radar
                  key={id}
                  name={name}
                  dataKey={id}
                  stroke={Colors[index]}
                  fill={Colors[index]}
                  fillOpacity={0.5}
                />
              ))}
              <Legend />
            </RadarChart>
          </Grid>
          <ChipsContainer list={list} remove={remove} />
        </Grid>
      </Paper>
    </Drawer>
  )
}

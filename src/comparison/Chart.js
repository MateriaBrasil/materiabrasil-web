import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
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

export default ({ list, actions: { close, remove } }) => {
  const drivers = ['firstDriver', 'secondDriver', 'thirdDriver', 'fourthDriver']
  const colors = ['#239eb1', '#ea6740', '#00C853', '#304FFE', '#d50000']

  const data = map(drivers, (driver, index) =>
    reduce(
      list,
      (object, material) => ({
        ...object,
        [material.id]: get(material, driver),
      }),
      { subject: `Driver #${index}` },
    ),
  )

  return (
    <Drawer open anchor="bottom" onClose={close}>
      <Button variant="raised" color="primary" onClick={close}>
        Comparação de materiais
        <Icon style={{ marginLeft: 8 }} />
      </Button>
      <Paper>
        <Grid
          container
          spacing={10}
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
                  stroke={colors[index]}
                  fill={colors[index]}
                  fillOpacity={0.5}
                />
              ))}
              <Legend />
            </RadarChart>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            md={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {map(list, ({ id, name }, index) => (
              <Chip
                key={id}
                label={name}
                style={{ background: colors[index], marginBottom: 10 }}
                onDelete={() => remove({ id })}
                color="secondary"
              />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Drawer>
  )
}

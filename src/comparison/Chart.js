import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import Paper from '@material-ui/core/Paper'
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

export default ({ list, actions: { close } }) => {
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
        <RadarChart width={320} height={320} outerRadius="50%" data={data}>
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
      </Paper>
    </Drawer>
  )
}

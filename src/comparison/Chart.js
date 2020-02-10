import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import get from 'lodash/get';
import { withStyles } from '@material-ui/core/styles';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import ChipsContainer from './ChipsContainer';
import Colors from './Colors';
import drivers from '../drivers';
import chartsStyle from '../chartsStyle';

export default withStyles(chartsStyle)(
  ({ list, classes, actions: { close, remove } }) => {
    const data = map(drivers, (driver, index) =>
      reduce(
        list,
        (object, material) => ({
          ...object,
          [material.id]: get(material, driver.key),
        }),
        { subject: driver.name },
      ),
    );

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
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart
                  style={{ display: 'inline-flex' }}
                  outerRadius="50%"
                  data={data}
                  className={classes.radar}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis tick={false} domain={[0, 100]} />
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
              </ResponsiveContainer>
            </Grid>
            <ChipsContainer close={close} list={list} remove={remove} />
          </Grid>
        </Paper>
      </Drawer>
    );
  },
);

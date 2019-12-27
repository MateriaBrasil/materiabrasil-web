import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './drivers.css';
import ButtonsContainer from './ButtonsContainer';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import drivers from '../../drivers';
import addComparison from './addComparison';
import chartsStyle from '../../chartsStyle';
import EditButton from './EditButton';
import AnswerQuestionnaire from '../../suppliers/info/AnswerQuestionnaire';

export default withStyles(chartsStyle)(props => {
  const {
    materialityDriver,
    manufactureDriver,
    managementDriver,
    socialDriver,
    supplierSlug,
  } = props;

  const DRIVER_MIN_NUMBER = 0;
  const DRIVER_MAX_NUMBER = 100;

  const normalizedNumber = number => {
    if (number < DRIVER_MIN_NUMBER) {
      return DRIVER_MIN_NUMBER;
    }
    if (number > DRIVER_MAX_NUMBER) {
      return DRIVER_MAX_NUMBER;
    }
    return number;
  };

  const hasDrivers =
    normalizedNumber(materialityDriver) ||
    normalizedNumber(manufactureDriver) ||
    normalizedNumber(managementDriver) ||
    normalizedNumber(socialDriver);

  const hasAllDrivers =
    materialityDriver && manufactureDriver && managementDriver && socialDriver;

  const data = [
    { subject: drivers[0].name, value: normalizedNumber(materialityDriver) },
    { subject: drivers[1].name, value: normalizedNumber(manufactureDriver) },
    { subject: drivers[2].name, value: normalizedNumber(managementDriver) },
    { subject: drivers[3].name, value: normalizedNumber(socialDriver) },
  ];

  const { editable, currentUser, current } = props;

  let suppliers;
  let supplier;
  let id;
  // só set essas vars se o usuario estiver logado :)
  if (currentUser) {
    suppliers = currentUser.suppliers;
    supplier = suppliers[0];
    id = currentUser.id;
  }

  const { supplierId } = current;

  return (
    <Fragment>
      {/* <div style={{ overflow: 'auto' }}>
        {!!hasAllDrivers && (
          <Button
            color="primary"
            style={{ float: 'right' }}
            onClick={addComparison(props)}
          >
            <AddIcon style={{ marginRight: 10 }} /> Comparar
          </Button>
        )}
      </div> */}
      {hasDrivers ? (
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart
            outerRadius="50%"
            data={data}
            className={props.classes.radar}
          >
            <PolarGrid />
            <PolarAngleAxis
              // tick={{ fill: 'red' }}
              style={{ fontSize: '18px', overflow: 'auto' }}
              className="text-char"
              dataKey="subject"
            />
            <PolarRadiusAxis
              domain={[DRIVER_MIN_NUMBER, DRIVER_MAX_NUMBER]}
              tick={false}
            />
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
        <div style={{ margin: '20px 0' }}>
          <Typography>Este material ainda não possui indicadores</Typography>
        </div>
      )}
      <ButtonsContainer {...props} />
      {!!hasAllDrivers && (
        <div className="grafico-help">
          <p>
            Com este gráfico, é possível comparar diversos materiais, basta
            clicar no botão ao lado.
          </p>
          <Link onClick={addComparison(props)} to="#">
            Comparar Materiais
          </Link>
        </div>
      )}
    </Fragment>
  );
});

import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core';
import Link from './Link';
import { useWindowSize } from '../helpers/hooks';

export default props => {
  const { suppliers } = props;

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return {
      width: width,
      height: height,
    };
  }

  let windowSize = ShowWindowDimensions(props);

  return (
    <Fragment>
      {suppliers &&
      suppliers.length > 0 &&
      suppliers[0].questionnairesCompleted === false ? (
        <a
          className="navbar-link"
          style={{ cursor: 'pointer' }}
          onClick={e => {
            e.preventDefault;
            props.snackbar.actions.setMessage(
              'Você deve responder os questionários do fornecedor antes de cadastrar um material',
            );
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              display: 'inline-block',
              alignSelf: 'center',
              color:
                props.transparent && windowSize.width > 768 ? '#FFF' : '#000',
            }}
          >
            Cadastrar Material
          </Typography>
        </a>
      ) : suppliers && suppliers.length > 0 ? (
        <Link
          to={`/suppliers/${suppliers[0].id}/materials/new`}
          text="Cadastrar Material"
          style={{
            color:
              props.transparent && windowSize.width > 768 ? '#FFF' : '#000',
          }}
          {...props}
        />
      ) : (
        <Link
          to={`/suppliers/new`}
          style={{
            color:
              props.transparent && windowSize.width > 768 ? '#FFF' : '#000',
          }}
          text="Cadastrar fornecedor"
          {...props}
        />
      )}
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import Header from './header';
import NavBarAndContent from '../../NavBarAndContent';
import Info from './Info';

export default props => (info, infoProps) => {
  return (
    <Fragment>
      <Header>
        <NavBarAndContent transparent {...props} />
      </Header>
      <Info current={info} {...props} {...infoProps} />
    </Fragment>
  );
};

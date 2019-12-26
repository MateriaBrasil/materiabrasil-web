import React, { Fragment } from 'react';
import Info from './Info';
import NavBarAndContent from '../../NavBarAndContent';
import Header from '../info/header/index';
export default props => (info, infoProps) => {
  return (
    <Fragment>
      <Header>
        <NavBarAndContent
          background={info.coverImageUrl}
          transparent
          {...props}
        />
      </Header>
      <Info current={info} {...props} {...infoProps} />
    </Fragment>
  );
};

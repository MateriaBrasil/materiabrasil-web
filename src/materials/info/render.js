import React, { Fragment } from 'react';
import Info from './Info';
import NavBarAndContent from '../../NavBarAndContent';
import Header from '../info/header/index';
export default props => (info, infoProps) => {
  const { categories } = info;

  function get_img(categories) {
    return categories.imageUrl !== null;
  }

  const filtered_categories = categories.filter(get_img);
  const img = filtered_categories[0] ? filtered_categories[0].imageUrl : null;

  return (
    <Fragment>
      <Header img={img}>
        <NavBarAndContent background={img && img} transparent {...props} />
      </Header>
      <Info current={info} {...props} {...infoProps} />
    </Fragment>
  );
};

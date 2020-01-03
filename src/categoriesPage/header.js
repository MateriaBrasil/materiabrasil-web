import React from 'react';
import Navbar from '../navBar/NavBar';

import { Header, Title } from './styles';
import bg from '../homepage/bg_banner.png';

export default function(props) {
  const { data } = props;

  return (
    <Header
      data={data}
      style={
        data.image_url
          ? { backgroundImage: `url(${data.image_url})` }
          : { backgroundImage: `url(${bg})` }
      }
    >
      <Navbar transparent {...props} />
      <Title>{data.name}</Title>
      <div className="description">
        <p>{data.description}</p>
      </div>
    </Header>
  );
}

import React from 'react';
import Navbar from '../navBar/NavBar';

import { Header, Title } from './styles';

export default function(props) {
  const { data } = props;

  return (
    <Header
      data={data}
      style={
        data.image_url
          ? { backgroundImage: `url(${data.image_url})` }
          : { background: '#313131' }
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

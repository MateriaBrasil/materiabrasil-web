import React, { useEffect, useState } from 'react';
import { api } from '../services/axios';
import Navbar from '../navBar/NavBar';

import { Header, Container, Title } from './styles';

export default function(props) {
  const { category } = props;
  const [data, setData] = useState('');

  useEffect(() => {
    api.get(`/categories/${category}`).then(response => {
      const data = response.data;
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <Header data={data} style={{ backgroundImage: `url(${data.image_url})` }}>
      <Navbar transparent {...props} />
      <Title>{data.name}</Title>
      <div className="description">
        <p>{data.description}</p>
      </div>
    </Header>
  );
}

import React, { useEffect } from 'react';
import { List } from 'croods';
import Link from 'react-router-dom/Link';
import Filters from 'categories/Filters';

import {
  Container,
  MaterialsList,
  MaterialSingle,
  StyledTypography,
  StyledField,
} from './styles';
import download from './download.png';
import favorites from './favorites.png';

export default function(props) {
  console.log(props);
  const { currentUser } = props;
  return (
    <Container>
      <StyledField type="text" placeholder="Pesquisar materials" />
      <List
        name="materials"
        path={`/materials`}
        // path={`/materials?${categories}`}
        render={list => (
          <MaterialsList>
            {list.map((item, index) => (
              <MaterialSingle to={`/materials/${item.slug}`} key={index}>
                <img
                  src="https://materiamundi-us.s3.amazonaws.com/uploads//9a278f531c0ac1453f97e0f459c0d544.jpg"
                  alt=""
                />
                <StyledTypography variant="h4">{item.name}</StyledTypography>
                <div className="content-material-single">
                  <div className="categories-wrapper">
                    <span>Tecido</span>
                    <span>Tecido</span>
                  </div>
                  <div className="icons">
                    <Link target="_blank" to={item.technicalSpecificationUrl}>
                      <img src={download} alt="" />
                    </Link>
                    {currentUser && (
                      <Link to={`/materials/${props.currentUser.id}/albums`}>
                        <img src={favorites} alt="" />
                      </Link>
                    )}
                  </div>
                </div>
                {console.log(item)}
              </MaterialSingle>
            ))}
          </MaterialsList>
        )}
      />
      {/* <Filters
        {...props}
        render={({ categories }) => (
          
        )}
      /> */}
    </Container>
  );
}

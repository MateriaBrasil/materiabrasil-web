import React from 'react';

import { List } from 'croods';
import Link from 'react-router-dom/Link';
import Filters from 'categories/Filters';
import { MaterialsList, MaterialSingle, StyledTypography } from './styles';

import download from './download.png';
import favorites from './favorites.png';

export default function(props) {
  let border_string;
  const { currentUser } = props;

  return (
    <div className="home_page_explore">
      <Filters
        {...props}
        render={({ categories }) => (
          <List
            name="materials"
            path={`/materials?${categories}`}
            render={list => (
              <MaterialsList>
                {list.map((item, index) => (
                  <MaterialSingle to={`/materials/${item.slug}`} key={index} item={item}>
                    <div className="content_img_borda">
                      <div className="borda" bg-index={border_string}></div>
                      <div className="img_loop"></div>
                    </div>
                    <div className="content_loop">
                      <StyledTypography variant="h4">{item.name}</StyledTypography>
                      <div className="content-material-single">
                        <div className="categories-wrapper">
                          {item.categoriesHasPage.map((categoriesHasPage, i) => (
                            <span className="span_category" key={i}>{categoriesHasPage.name}</span>
                          ))}
                        </div>
                        <div className="icons">
                          {currentUser && (
                            <Link to={`/materials/${props.currentUser.id}/albums`}>
                              <img src={favorites} alt="" />
                            </Link>
                          )}
                          <Link target="_blank" to={item.technicalSpecificationUrl}>
                            <img src={download} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </MaterialSingle>
                ))}
              </MaterialsList>
            )}
          />
        )}
      />
    </div>
  );
}

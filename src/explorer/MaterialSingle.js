import React from 'react';

import Redirect from 'react-router-dom/Redirect';
import Link from 'react-router-dom/Link';

import download from './download.png';
import favorites from './favorites.png';

import { MaterialSingle, StyledTypography } from './styles';
import addComparison from '../materials/info/addComparison';

export default function(props) {
  const { material, index, data, currentUser } = props;
  let border_string;

  return (
    <MaterialSingle key={String(index)} item={material}>
      <Link
        to={{
          pathname: `/materials/${material.slug}`,
          state: {
            category_name: data ? data.name : null,
            category_slug: data ? data.slug : null,
          },
        }}
        className="content_img_borda"
      >
        <div className="borda" bg-index={border_string} />
        <div
          className="img_loop"
          style={{
            backgroundImage: `url(${
              material.highlighted
                ? material.highlight_image_url
                : material.list_image_url
            })`,
          }}
        >
          {material.questionnaires_completed && (
            <button onClick={addComparison(props)}>comparar</button>
          )}
        </div>
      </Link>
      <div className="content_loop">
        <StyledTypography variant="h4">{material.name}</StyledTypography>
        <div className="content-material-single">
          <div className="categories-wrapper">
            {material.categories_has_page.map((categoriesHasPage, i) => (
              <a
                href={`/categories/${categoriesHasPage.slug}`}
                className="span_category"
                key={i}
              >
                {categoriesHasPage.name}
              </a>
            ))}
          </div>
          <div className="icons">
            {currentUser && (
              <Link to={`/materials/${props.currentUser.id}/albums`}>
                <img src={favorites} alt="" />
              </Link>
            )}
            {material.technicalSpecificationUrl && (
              <Link target="_blank" to={material.technicalSpecificationUrl}>
                <img src={download} alt="" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </MaterialSingle>
  );
}

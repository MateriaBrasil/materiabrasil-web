import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom/Link';
import {
  MaterialsList,
  MaterialSingle,
  StyledTypography,
  StyledButton,
} from './styles';
import download from './download.png';
import favorites from './favorites.png';
import Loading from '../Loading';

import { api } from '../services/axios';

export default function(props) {
  const { data } = props;
  let border_string;
  const { currentUser, categories } = props;
  const { term } = props;

  const [materials, setMaterials] = useState([]);
  const [loadingMore, setLoadingMore] = useState(true);
  const [loadingCat, setLoadingCat] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(p => p + 1);

  function filterCategories() {
    const endcoded_term = encodeURI(props.term);
    if (endcoded_term === '') {
      return `/materials?${categories}&page=${page}&per_page=9`;
    } else {
      return `/search?term=${endcoded_term}&${categories}&page=${page}&per_page=9`;
    }
  }

  useEffect(
    () => {
      async function loadMaterials() {
        setLoadingCat(true);
        setPage(1);
        const response = await api.get(filterCategories(), {
          params: { page },
        });
        setMaterials(response.data);
        setLoadingMore(false);
        setLoadingCat(false);
      }

      loadMaterials();
    },
    [categories, term],
  );

  useEffect(
    () => {
      async function loadMaterials() {
        try {
          setLoadingMore(true);
          const response = await api.get(filterCategories(), {
            params: { page },
          });

          const newMaterials = [...materials, ...response.data];
          setMaterials(newMaterials);
          setLoadingMore(false);
          setLoadingCat(false);
        } catch (err) {
          // toast.error('Nenhum aluno foi encontrado');
        }
      }

      loadMaterials();
      console.log(materials);
    },
    [page],
  );

  if (loadingCat) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <MaterialsList>
        {materials.map((material, index) => (
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
              />
            </Link>
            <div className="content_loop">
              <StyledTypography variant="h4">{material.name}</StyledTypography>
              <div className="content-material-single">
                <div className="categories-wrapper">
                  {material.categories_has_page.map((categoriesHasPage, i) => (
                    <Link
                      to={`/categories/${categoriesHasPage.slug}`}
                      className="span_category"
                      key={i}
                    >
                      {categoriesHasPage.name}
                    </Link>
                  ))}
                </div>
                <div className="icons">
                  {currentUser && (
                    <Link to={`/materials/${props.currentUser.id}/albums`}>
                      <img src={favorites} alt="" />
                    </Link>
                  )}
                  {material.technicalSpecificationUrl && (
                    <Link
                      target="_blank"
                      to={material.technicalSpecificationUrl}
                    >
                      <img src={download} alt="" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </MaterialSingle>
        ))}
      </MaterialsList>

      {loadingMore && <Loading />}

      <StyledButton
        onClick={() => {
          nextPage();
        }}
      >
        mais materiais
      </StyledButton>
    </div>
  );
}

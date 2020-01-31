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

  const [firstLoad, setFirstLoad] = useState(true);
  const [materials, setMaterials] = useState([]);
  const [materialsPassed, setMaterialsPassed] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingCat, setLoadingCat] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(p => p + 1);

  // pagination
  useEffect(
    () => {
      setError(null);

      async function loadMaterials() {
        try {
          setLoadingMore(true);
          if (term !== '') {
            setMaterialsPassed(null);
          }
          const path =
            term === ''
              ? `/materials?${categories}`
              : `/search?term=${encodeURI(props.term)}&${categories}`;
          const response = await api.get(path, {
            params: {
              materials_passed: encodeURI(materialsPassed),
            },
          });

          if (response.data === []) {
            setError('Sem mais resultados');
          }

          const newMaterials = [...materials, ...response.data];
          setMaterials(newMaterials);
          setLoadingCat(false);
          setLoadingMore(false);
        } catch (err) {
          // toast.error('Nenhum aluno foi encontrado');
          setError('Sem mais resultados');
          setLoadingCat(false);
          setLoadingMore(false);
        }
      }
      loadMaterials();
      // console.log('pagination effect');
    },
    [page],
  );

  // categories
  useEffect(
    () => {
      setMaterialsPassed(null);
      setError(null);

      async function loadMaterials() {
        try {
          setLoadingCat(true);
          const response = await api.get(`/materials?${categories}`, {
            params: {
              materials_passed: encodeURI(materialsPassed),
            },
          });

          if (response.data === []) {
            setError('Sem mais resultados');
          }

          setMaterials(response.data);
          setLoadingCat(false);
          setLoadingMore(false);
        } catch (err) {
          // toast.error('Nenhum aluno foi encontrado');
          setError('Sem mais resultados');
          setLoadingCat(false);
          setLoadingMore(false);
        }
      }
      // console.log(`>>>> ${categories}`);
      if (categories !== '' && firstLoad) {
        return;
      } else {
        loadMaterials();
        setFirstLoad(false);
      }
    },
    [categories],
  );

  // search
  useEffect(
    () => {
      setMaterialsPassed(null);
      setError(null);

      async function loadMaterials() {
        try {
          setLoadingCat(true);
          const endcoded_term = encodeURI(props.term);
          const response = await api.get(
            `/search?term=${endcoded_term}&${categories}`,
            {
              params: {
                materials_passed: encodeURI(materialsPassed),
              },
            },
          );

          setMaterials(response.data);
          setLoadingCat(false);
          setLoadingMore(false);
        } catch (err) {
          // toast.error('Nenhum material foi encontrado');
          setError('Nenhum Material encontrado');
          setLoadingCat(false);
          setLoadingMore(false);
        }
      }

      if (term !== '') {
        loadMaterials();
      }
    },
    [term],
  );

  useEffect(
    () => {
      const materialsPassedDraft = [];

      materials.forEach(material => {
        materialsPassedDraft.push(material.id);
      });

      setMaterialsPassed(materialsPassedDraft);
    },
    [materials],
  );

  if (loadingCat) return <Loading />;
  if (error) return <h1 style={{ marginTop: '30px' }}>{error}</h1>;

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

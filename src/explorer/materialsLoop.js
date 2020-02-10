import React, { useState, useEffect } from 'react';

import { MaterialsList, StyledButton } from './styles';
import MaterialSingle from './MaterialSingle';

import Loading from '../Loading';

import { api } from '../services/axios';

export default function(props) {
  const { data } = props;
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

      console.log('ccccc');
      console.log(props);
      console.log('aaaaa');
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
      console.log(props);
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
          <MaterialSingle
            key={String(index)}
            {...props}
            current={material}
            material={material}
            index={index}
          />
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

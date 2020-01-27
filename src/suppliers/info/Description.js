import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { addhttp, validURL } from '../../helpers/index';
import { Description, DescriptionItem } from './styles';

export default function(props) {
  const { current, currentUser } = props;
  const { addresses } = current;
  let streetAddress, zipCode, city, state, country;
  if (addresses) {
    streetAddress = addresses.streetAddress;
    zipCode = addresses.zipCode;
    city = addresses.city;
    state = addresses.state;
    country = addresses.country;
  }
  const fullAddress = addresses
    ? `${streetAddress && streetAddress} ${zipCode ? ` - ${zipCode}` : ''}`
    : null;
  let fullCity = addresses
    ? ` ${city && city}, ${state && state}, ${country && country}`
    : null;

  return currentUser ? (
    <Description>
      <DescriptionItem>
        <h3>Descrição</h3>
        <p>{current.description}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Alcance</h3>
        <p>{current.reach}</p>
      </DescriptionItem>

      <DescriptionItem>
        {validURL(current.website) && (
          <Fragment>
            <h3>Site</h3>
            <a target="_blank" href={addhttp(current.website)}>
              {current.website}
            </a>
          </Fragment>
        )}
      </DescriptionItem>

      <DescriptionItem>
        <h3>Email</h3>
        <p>{current.email}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Telefone</h3>
        <p>{current.phone}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Endereço</h3>
        {typeof addresses === 'object'
          ? addresses && (
              <p>
                {fullAddress.includes('null') ? '' : fullAddress}
                {fullCity.includes('null') ? `${city}, ${state}` : fullCity}
                {/* BR 153, Km 430, Loteamento Jardim Guanabara - 75053-640 Anápolis,
        GO, brasil */}
              </p>
            )
          : typeof addresses === 'array' &&
            addresses &&
            current.addresses.map((item, index) => {
              const { streetAddress, zipCode, city, state, country } = item;
              const fullAddress = `${streetAddress}${
                zipCode ? ` - ${zipCode}` : ''
              }`;
              let fullCity = `${city}, ${state}, ${country}`;

              <p>
                {fullAddress.includes('null') ? '' : fullAddress}
                {fullCity.includes('null') ? `${city}, ${state}` : fullCity}
              </p>;
            })}
      </DescriptionItem>
    </Description>
  ) : (
    <Description>
      <DescriptionItem>
        <h3>Descrição</h3>
        <p>{current.description}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Alcance</h3>
        <p>{current.reach}</p>
      </DescriptionItem>

      <p>
        <Link to={'/auth/sign-up'}>Cadastre-se</Link> para ver o contato do
        fornecedor.
      </p>
    </Description>
  );
}

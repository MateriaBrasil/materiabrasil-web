import React from 'react';
import { Link } from 'react-router-dom';

import { Description, DescriptionItem } from './styles';

export default function(props) {
  const { current, currentUser } = props;
  const { addresses } = current;
  const { streetAddress, zipCode, city, state, country } = addresses;
  const fullAddress =
    addresses &&
    `${streetAddress && streetAddress} ${zipCode ? ` - ${zipCode}` : ''}`;
  let fullCity =
    addresses && ` ${city && city}, ${state && state}, ${country && country}`;

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
        <h3>Site</h3>
        <a target="_blank" href={current.website}>
          {current.website}
        </a>
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
        {console.log(current.addresses)}
        {console.log(typeof addresses)}
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
              const fullAddress =
                addresses &&
                `${streetAddress}${zipCode ? ` - ${zipCode}` : ''}`;
              let fullCity = addresses && `${city}, ${state}, ${country}`;

              <p>
                {fullAddress.includes('null') ? '' : fullAddress}
                {fullCity.includes('null') ? `${city}, ${state}` : fullCity}
                {/* BR 153, Km 430, Loteamento Jardim Guanabara - 75053-640 Anápolis,
            GO, brasil */}
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

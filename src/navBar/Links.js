import React, { Fragment } from 'react';

import SignOut from '../auth/signOut/SignOut';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Link from './Link';
import SupplierLink from './SupplierLink';

export default props => {
  const { currentUser } = props;
  const { firstName, lastName, suppliers } = currentUser || {};
  const name = `${firstName} ${lastName}`;

  return (
    <div className="navbar-links">
      <Link to="/about" text="Sobre" {...props} />
      <Link
        to={'http://materiabrasil.com.br/'}
        text="Escritórios"
        targetBlank="true"
      />
      <Link to="/materials" text="Explore" {...props} />
      <Link to="/forum" text="Fórum" {...props} />
      {currentUser ? (
        <Fragment>
          <SupplierLink suppliers={suppliers} {...props} />
          <Link to="/profile" text={name} {...props} />
          <SignOut {...props} />
        </Fragment>
      ) : (
        <Fragment>
          <SignIn {...props} />
          <SignUp {...props} />
        </Fragment>
      )}
    </div>
  );
};

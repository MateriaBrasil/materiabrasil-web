import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import SignOut from '../auth/signOut/SignOut';

import Link from './Link';
import SignIn from './SignIn';
import SupplierLink from './SupplierLink';
import './Link.css';

export default props => {
  const { anchorEl, open, handleClose } = props;
  const { currentUser } = props;
  const { firstName, lastName, suppliers } = currentUser || {};
  const name = `${firstName} ${lastName}`;

  return (
    <Menu
      id="menu-appbar"
      className="menu-appbar"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Link to="/" text="Home" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/about" text="Sobre" />
      </MenuItem>
      {/* <MenuItem onClick={handleClose}>
        <Link
          to={'http://materiabrasil.com.br/'}
          text="Escritórios"
          targetBlank="true"
        />
      </MenuItem> */}
      {/* <MenuItem onClick={handleClose}>
        <Link to="/materials" text="Explore" />
      </MenuItem> */}
      <MenuItem onClick={handleClose}>
        <Link to="/forum" text="Fórum" />
      </MenuItem>
      {currentUser ? (
        <MenuList>
          <MenuItem onClick={handleClose}>
            <SupplierLink suppliers={suppliers} {...props} />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/profile" text={name} />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SignOut {...props} />
          </MenuItem>
        </MenuList>
      ) : (
        <MenuList>
          <MenuItem onClick={handleClose}>
            <Link
              to={{
                pathname: '/auth/sign-up',
                state: { referrer: '/suppliers/new' },
              }}
              text="Cadastrar fornecedor"
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SignIn {...props} />
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

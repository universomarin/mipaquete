import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../assets/svg/logo-mipaquete.svg';

import { Button } from '../button/Button';
import './header.scss';

const MenuList = [
  {
    id: 0,
    title: 'Inicio'
  },
  {
    id: 1,
    title: '¿Cómo funciona?'
  },
  {
    id: 2,
    title: 'Integra tu tienda online'
  },
  {
    id: 3,
    title: 'Blogística'
  },
  {
    id: 4,
    title: 'Puntos mipaquete'
  },
];

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div className='wrapper__logo'>
        <img src={Logo} alt="Mipaquete" />
      </div>
      <div className='wrapper__menu'>
        {MenuList.map(({ id, title }) => (
          <li className='wrapper__menu__item' key={id}>{title}</li>
        ))}
      </div>
      <div className='wrapper__buttons-menu'>
        {user ? (
          <Button onClick={onLogout} label="Cerrar sesión" />
        ) : (
          <>
            <Button primary onClick={onLogin} label="Ingresa" />
            <Button secondary onClick={onCreateAccount} label="Regístrate" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

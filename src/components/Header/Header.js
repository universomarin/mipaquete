import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../assets/svg/logo-mipaquete.svg';
import Home from '../../assets/svg/home.svg';
import Menu from '../../assets/svg/menu.svg';

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
    <div className='wrapper'>
      <div className='wrapper__logo'>
        <img src={Logo} alt='Logo Mipaquete' />
      </div>
      <ul className='wrapper__menu'>
        {MenuList.map(({ id, title }) => (
          <li className='wrapper__menu__item' key={id}>{title}</li>
        ))}
      </ul>
      <div className='wrapper__buttons-menu'>
        {user ? (
          <div className='wrapper__buttons-menu__onLogin'>
            <h3 className='wrapper__buttons-menu__onLogin--username'>Juan Marin</h3> 
            <Button size='avatar' onClick={onLogout} label='J' />
          </div>
        ) : (
          <>
            <Button primary onClick={onLogin} label='Ingresa' />
            <Button secondary onClick={onCreateAccount} label='Regístrate' />
          </>
        )}
      </div>
    </div>
    <div className='wrapper__mobile'>
      <h3 className='wrapper__mobile__title'>Registro</h3>
      <div className='wrapper__mobile__options'>
        {user ? (
          <div className='wrapper__buttons-menu__onLogin'>
            <Button size='avatar' onClick={onLogout} label='J' />
          </div>
        ) : (
          <>
            <img src={Home} alt='Inicio Mipaquete' />
            <img src={Menu} alt='Menu Mipaquete' />
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

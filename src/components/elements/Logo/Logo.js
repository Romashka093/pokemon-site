import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as Pokeapi } from 'assets/icons/pokeapi.svg';
const { logo } = styles;

const Logo = () => {
  return <Pokeapi className={logo} />;
};

export default Logo;

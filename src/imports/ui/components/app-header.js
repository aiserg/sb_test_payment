import React, { Component } from 'react';
import logo from '../../../images/scentbird-logo.png';
import './app-header.scss';


class Header extends Component {

  render() {
    const mainPageLink = 'localhost:3000';

    return (
      <header className='header'>
        <a href={mainPageLink}>
          <img src={logo} className='header__logo' alt='logo' />
        </a>
      </header>
    )
  }
}

export default Header;

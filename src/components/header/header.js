import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import UserPanel from '../user-panel/user-panel';
import './header.scss';
import { Template } from 'devextreme-react/core/template';
import logo from './images/random.png'

export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  return (
    <header className={'header-component'}>
      <div id="mytoolbar">
        <div id="logowrapper">
          <img class="logoimage" src={logo}></img> 
        </div>
      </div>
      

    </header>
)}

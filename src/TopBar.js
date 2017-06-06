import React, { Component } from 'react';
import Popup from 'react-popup';
import * as firebase from 'firebase';
import './index.css';
import './popup.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class TopBar extends Component {

  render() {
    return (
      <div style={{background: '#1294eb'}}>

      </div>
    );
  }
}
export default TopBar;

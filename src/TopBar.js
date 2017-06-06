import React, { Component } from 'react';
import Popup from 'react-popup';
import * as firebase from 'firebase';
import './index.css';
import './popup.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class TopBar extends Component {

  render() {
    return (
      <div className='App' style={{backgroundColor: '#1294eb', display: 'inline-block', textAlign: 'center', padding: '10px', borderRadius: '10px', color: '#ffffff'}}>
      <div><b>Total XP:</b>&nbsp;XP&emsp;<b>Used XP:</b>&nbsp;USEDXP&emsp;<b>unUsed XP:</b>&nbsp;UNUSEDXP&emsp;<b>Olbigation:</b>&nbsp;OLBIGLATION&emsp;<b>Credits:</b>&nbsp;CREDITS</div>
      </div>
    );
  }
}
export default TopBar;

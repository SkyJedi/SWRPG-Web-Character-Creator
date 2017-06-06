import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import Channel from './Channel';
import SideBar from './SideBar';
import TopBar from './TopBar';
import './index.css';
import * as firebase from 'firebase';
import config from './config';
firebase.initializeApp(config.config);

if (window.location.pathname !== '/') {
  var channel = window.location.pathname.slice(1).toLowerCase();
}

if (channel !== undefined) {
  startUp();
} else {
  setChanPage();
}

function setChanName(chanName, userName) {
  window.location = `/${chanName}?${userName}`;
}

function setChanPage () {
  ReactDOM.render(
    <Channel setFormChan={setChanName} />,
    document.getElementById('root')
  );
}

function startUp () {
  var webApp =
  <div>
    <div style={{float: 'left', width: '140px'}}>
      <SideBar />
    </div>
    <div style={{marginLeft: '140px', height: '30px'}}>
    <TopBar />
    </div>


  </div>;




ReactDOM.render(
    webApp,
    document.getElementById('root')
  );

  ReactDOM.render(
    <Popup />,
    document.getElementById('popupContainer')
  );
};

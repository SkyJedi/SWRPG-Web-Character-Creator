import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import Channel from './Channel';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import MainPage from './MainPage';
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

function setChanName(chanName) {
  window.location = `/${chanName}`;
}

function setChanPage() {
  ReactDOM.render(
    <Channel setFormChan={setChanName} />,
    document.getElementById('root')
  );
}

function startUp () {
  var webApp =
  <div>
    <div style={{marginLeft: '155px', marginTop: '15px'}}>
      <TopBar />
    </div>
    <div style={{float: 'left', display: 'block', marginTop: '10px', width: '1200px', height: '800px'}}>
      <MainPage />
    </div>
    <div className='footer'>
      <BottomBar />
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

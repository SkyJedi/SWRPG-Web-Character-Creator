import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import './index.css';
import * as firebase from 'firebase';
import config from './config';
firebase.initializeApp(config.config);



startUp();

function startUp () {
  var webApp =
  <div>
  BOOBS
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

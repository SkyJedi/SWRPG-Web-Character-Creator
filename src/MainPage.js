import React, { Component } from 'react';
import * as firebase from 'firebase';
import Characters from './pages/Characters';
import Description from './pages/Description';
import Background from './pages/Background';
import Obligations from './pages/Obligations';
import Species from './pages/Species';
import Career from './pages/Career';
import Characteristics from './pages/Characteristics';
import Specializations from './pages/Specializations';
import Motivations from './pages/Motivations';
import Skills from './pages/Skills';
import Equipment from './pages/Equipment';
import './index.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class MainPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        displayPage: '',
      };
    }

  setDisplayPage(props, page) {
      this.setState({displayPage: page});
    }

  render() {
    return (
      <div>
      BOOBS
      </div>
    );
  }
}
export default MainPage;

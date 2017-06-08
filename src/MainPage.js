import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';
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

var channel = window.location.pathname.slice(1).toLowerCase();

class MainPage extends Component {

  constructor() {
      super();
      this.state = {
        displayPage: '<div/>',
        displayPageRef: firebase.database().ref().child(`${channel}`).child('displayPage'),
      };
    }

  componentDidMount() {
    this.state.displayPageRef.on('value', snap => {
      if (snap.val() !== null) {
        switch (snap.val()) {
          case 'Characters':
            this.setState({displayPage: <Characters />});
            break;
          case 'Description':
            this.setState({displayPage: <Description />});
            break;
          case 'Background':
            this.setState({displayPage: <Background />});
            break;
          case 'Obligations':
            this.setState({displayPage: <Obligations />});
            break;
          case 'Species':
            this.setState({displayPage: <Species />});
            break;
          case 'Career':
            this.setState({displayPage: <Career />});
            break;
          case 'Characteristics':
            this.setState({displayPage: <Characteristics />});
            break;
          case 'Specializations':
            this.setState({displayPage: <Specializations />});
            break;
          case 'Motivations':
            this.setState({displayPage: <Motivations />});
            break;
          case 'Skills':
            this.setState({displayPage: <Skills />});
            break;
          case 'Equipment':
            this.setState({displayPage: <Equipment />});
            break;
          default:
            break;
          }
      } else {
        this.setState({displayPage: <Characters />});
      }
    });
  }

  render() {
    return (
      <div> {this.state.displayPage} </div>
    );
  }
}
export default MainPage;

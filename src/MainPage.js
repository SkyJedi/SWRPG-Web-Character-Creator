import React, { Component } from 'react';
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


class MainPage extends Component {

  constructor() {
      super();
      this.state = {
        displayPage: <Characters />,
      };
    }

  setPage(page) {
    switch (page) {
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
  }




  render() {
    return (
      <div style={{margin: '0 0 200px 0'}}>
        <div style={{float: 'left'}}>
          <button onClick={this.setPage.bind(this, 'Characters')}>Characters</button>
          <button onClick={this.setPage.bind(this, 'Description')}>Description</button>
          <button onClick={this.setPage.bind(this, 'Background')}>Background</button>
          <button onClick={this.setPage.bind(this, 'Obligations')}>Obligations</button>
          <button onClick={this.setPage.bind(this, 'Species')}>Species</button>
          <button onClick={this.setPage.bind(this, 'Career')}>Career</button>
          <button onClick={this.setPage.bind(this, 'Characteristics')}>Characteristics</button>
          <button onClick={this.setPage.bind(this, 'Specializations')}>Specializations</button>
          <button onClick={this.setPage.bind(this, 'Motivations')}>Motivations</button>
          <button onClick={this.setPage.bind(this, 'Skills')}>Skills</button>
          <button onClick={this.setPage.bind(this, 'Equipment')}>Equipment</button>
        </div>
        <div style={{margin: '5px 0 0 160px'}}>
        {this.state.displayPage}
        </div>



      </div>
    );
  }
}
export default MainPage;

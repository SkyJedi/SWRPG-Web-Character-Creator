import React, { Component } from 'react';
import * as firebase from 'firebase';
var channel = window.location.pathname.slice(1).toLowerCase();
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

  constructor(props) {
      super(props);
      this.state = {
        displayPage: {Characters: 'block', Description: 'none', Background: 'none', Obligations: 'none', Species: 'none', Career: 'none', Characteristics: 'none', Specializations: 'none', Motivations: 'none', Skills: 'none', Equipment: 'none'},
        characters: {},
        currentCharacter: { key: '',
                            description: { playerName: '', characterName: 'No Name', gender: '', age: '', height: '', build: '', hair: '', eyes: '' },
                            selectedSpecies: {Key:'Default', Name:'Default', StartingChars:{Brawn:0, Agility:0, Intellect:0, Cunning:0, Willpower:0, Presence:0}, Description:'', StartingAttrs:{WoundThreshold:0, StrainThreshold:0, Experience:0}},
                          },
        charactersRef: firebase.database().ref().child(`${channel}`).child('characters'),
        currentCharacterRef: firebase.database().ref().child(`${channel}`).child('currentCharacter'),
      };
    }

  componentDidMount() {
    this.state.charactersRef.on('value', snap => {
      if (snap.val() != null) {
        this.setState({ characters: snap.val() });
      } else {
        this.setState({ characters: {} });
        this.setPage('Characters');
      }
    });

    this.state.currentCharacterRef.on('value', snap => {
      if (snap.val() != null) {
        this.setState({ currentCharacter: snap.val() });
      }
    });
  }


  setCurrentCharacter(key) {
    this.state.currentCharacterRef.set(this.state.characters[key]);
  }

  createCharacter() {
    var myRef = this.state.charactersRef.push();
    var newCharacter = { key: myRef.key,
                         description: { playerName: '', characterName: 'No Name', gender: '', age: '', height: '', build: '', hair: '', eyes: '' },
                         selectedSpecies: {Key:'Default', Name:'Default', StartingChars:{Brawn:0, Agility:0, Intellect:0, Cunning:0, Willpower:0, Presence:0}, Description:'', StartingAttrs:{WoundThreshold:0, StrainThreshold:0, Experience:0}},
                       }
    myRef.set(newCharacter);
    this.state.currentCharacterRef.set(newCharacter);
  }

  deleteCharacter() {
    this.state.charactersRef.child(this.state.currentCharacter.key).remove();
  }

  updateCharacter(currentCharacter) {
    this.state.charactersRef.child(currentCharacter.key).set(currentCharacter);
    this.state.currentCharacterRef.set(currentCharacter);
  }

  setPage(page) {
    let displayPage = Object.assign({}, this.state.displayPage);
    Object.keys(displayPage).forEach((key)=>{
      displayPage[key] = 'none';
    });
    displayPage[page] = 'block';
    this.setState({ displayPage: displayPage });

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
          <div style={{display: this.state.displayPage.Characters}}>
            <Characters  characters={ this.state.characters } currentCharacter={ this.state.currentCharacter } setPage={ this.setPage.bind(this) } createCharacter={ this.createCharacter.bind(this) } setCurrentCharacter={ this.setCurrentCharacter.bind(this) } deleteCharacter={ this.deleteCharacter.bind(this) } />
          </div>
          <div style={{display: this.state.displayPage.Description}}>
            <Description currentCharacter={ this.state.currentCharacter } updateCharacter={ this.updateCharacter.bind(this) }/>
          </div>
          <div style={{display: this.state.displayPage.Background}}>
            <Background />
          </div>
          <div style={{display: this.state.displayPage.Obligations}}>
            <Obligations />
          </div>
          <div style={{display: this.state.displayPage.Species}}>
            <Species currentCharacter={ this.state.currentCharacter } updateCharacter={ this.updateCharacter.bind(this) } />
          </div>
          <div style={{display: this.state.displayPage.Career}}>
            <Career />
          </div>
          <div style={{display: this.state.displayPage.Characteristics}}>
            <Characteristics />
          </div>
          <div style={{display: this.state.displayPage.Specializations}}>
            <Specializations />
          </div>
          <div style={{display: this.state.displayPage.Motivations}}>
            <Motivations />
          </div>
          <div style={{display: this.state.displayPage.Skills}}>
            <Skills />
          </div>
          <div style={{display: this.state.displayPage.Equipment}}>
            <Equipment />
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;

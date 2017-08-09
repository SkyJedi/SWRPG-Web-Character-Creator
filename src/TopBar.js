import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';
var channel = window.location.pathname.slice(1).toLowerCase();
import { calcStat } from "./functions/utils";
import { build } from'./functions/MasterParser';


class TopBar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentCharacter: { key: '',
                            description: { playerName: '', characterName: 'No Name', gender: '', age: '', height: '', build: '', hair: '', eyes: '' },
                            selectedSpecies: {Key:'Default', Name:'Default', StartingChars:{Brawn:0, Agility:0, Intellect:0, Cunning:0, Willpower:0, Presence:0}, Description:'', StartingAttrs:{WoundThreshold:0, StrainThreshold:0, Experience:0}},
                          },
        currentCharacterRef: firebase.database().ref().child(`${channel}`).child('currentCharacter'),
      };
    }

  componentDidMount() {
    this.state.currentCharacterRef.on('value', snap => {
      if (snap.val() != null) {
        this.setState({ currentCharacter: snap.val() });
      }
    });
  }

  Build() {
    build();
  }

  render() {
    return (
      <div>
      <div className='navbar'>
      <div><b>Total XP:</b>&nbsp;{ calcStat(this.state.currentCharacter, 'totalxp') }&emsp;<b>Used XP:</b>&nbsp;{ calcStat(this.state.currentCharacter, 'usedxp') }&emsp;<b>Unused XP:</b>&nbsp;{ calcStat(this.state.currentCharacter, 'totalxp') - calcStat(this.state.currentCharacter, 'usedxp') }&emsp;<b>Olbigation:</b>&nbsp;{ calcStat(this.state.currentCharacter, 'abligation') }&emsp;<b>Credits:</b>&nbsp;{ calcStat(this.state.currentCharacter, 'credits') }</div>
      </div>
      <button style={{background: 'transparent', border: 'none', display: 'inline-block', margin: 'auto', verticalAlign: 'middle', width: '20px'}} onClick={this.Build.bind(this)} />
      </div>
    );
  }
}
export default TopBar;

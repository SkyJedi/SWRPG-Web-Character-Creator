import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';
var channel = window.location.pathname.slice(1).toLowerCase();
import { calcStat } from "./functions/utils";

var stats = ['Soak', 'Wounds', 'Strain'],
    characteristics = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence']

class BottomBar extends Component {

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

  render() {
    return (
      <div className='navbar' style={{float: 'right', width:'560px'}}>
      <div style={{float: 'left'}}>
      {stats.map((stat)=>
        <div className='stats-box' key={stat} >
        <div className='stats-top-box'><div style={{fontSize:'12px'}}>{stat}</div></div>
        <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>{ calcStat(this.state.currentCharacter, stat) }</div></div>
        </div>
      )}
      <div className='stats-box'>
      <div className='stats-top-box'><div style={{fontSize:'12px'}}>Defense</div></div>
      <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>{ calcStat(this.state.currentCharacter, 'meleeDef') } | { calcStat(this.state.currentCharacter, 'rangeDef') }</div></div>
      </div>
      </div>
      <div style={{float: 'left'}}>
      {characteristics.map((characteristic)=>
        <div className='stats-box' key={characteristic}>
        <div className='stats-top-box'><div style={{fontSize:'12px'}}>{characteristic}</div></div>
        <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>{ calcStat(this.state.currentCharacter, characteristic) }</div></div>
        </div>
      )}
      </div>
      </div>
    );
  }
}
export default BottomBar;

import React, { Component } from 'react';
import '../index.css';
var Data = require('../data.json');
var characteristics = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence']

class Species extends Component {

  constructor() {
      super();
      this.state = {
        Species: {},
      };
    }

  componentDidMount() {
    Data.Species.Default = {Key:'Default', Name:'Default', StartingChars:{Brawn:0, Agility:0, Intellect:0, Cunning:0, Willpower:0, Presence:0}, Description:'', StartingAttrs:{WoundThreshold:0, StrainThreshold:0, Experience:0}};
    this.setState({Species: Data.Species});
  }

  setDescription() {

  }

  select() {
    let currentCharacter = this.props.currentCharacter;
    currentCharacter.selectedSpecies = this.state.Species[this.refs.Species.options[this.refs.Species.selectedIndex].id]
    this.props.updateCharacter(currentCharacter);
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
      <div style={{float: 'left', marginLeft: '10px', width: '300px'}}>
      <span style={{fontSize: '30px'}}>Species: {this.props.currentCharacter.selectedSpecies.Name}</span>
      <br />
      <select style={{float: 'left', margin:'20px 40px 20px 0', fontSize:'20px'}} ref='Species' onChange={this.select.bind(this)}>
        {Object.keys(this.state.Species).map((key)=>
          <option id={key} key={key}>{this.state.Species[key].Name}</option>
        )}
      </select>
      <br/>
      <img key={this.props.currentCharacter.selectedSpecies.Key} style={{height: '200px', maxWidth: '400px', display: 'block', margin: 'auto'}} src={`/Data/SpeciesImages/${this.props.currentCharacter.selectedSpecies.Key}.png`} alt=''/>
      </div>
      <div style={{marginLeft: '330px'}}>
      <div className='navbar'>
        <div style={{float: 'left', width: '480px'}}>
        <h2>Starting Stats</h2>
        {characteristics.map((characteristic)=>
          <div className='stats-box' key={characteristic}>
          <div className='stats-top-box'><div style={{fontSize:'12px'}}>{characteristic}</div></div>
          <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>{this.props.currentCharacter.selectedSpecies.StartingChars[characteristic]}</div></div>
          </div>
        )}
      <div><b>Wound Threshold:</b>&nbsp;{this.props.currentCharacter.selectedSpecies.StartingAttrs.WoundThreshold}&emsp;<b>Strain Threshold:</b>&nbsp;{this.props.currentCharacter.selectedSpecies.StartingAttrs.StrainThreshold}&emsp;<b>Starting XP:</b>&nbsp;{this.props.currentCharacter.selectedSpecies.StartingAttrs.Experience}&emsp;</div>
      </div>
      </div>

      <div>
      <div style={{fontSize: '20px', width: '480px', maxHeight: '530px', overflow: 'scroll'}} dangerouslySetInnerHTML={{__html: this.props.currentCharacter.selectedSpecies.Description}} />
      </div>

      </div>
      </div>
    );
  }
}
export default Species;

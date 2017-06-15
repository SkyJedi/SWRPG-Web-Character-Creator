import React, { Component } from 'react';
import '../index.css';
var parser = require('../functions/xmlParser');
var SpeciesList = require('../functions/xmlNames').Species
var characteristics = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence']

class Species extends Component {

  constructor() {
      super();
      this.state = {
        species: {Key:'Default', Name:'Default', StartingChars:{Brawn:0, Agility:0, Intellect:0, Cunning:0, Willpower:0, Presence:0}, Description:'', StartingAttrs:{WoundThreshold:0, StrainThreshold:0, Experience:0}},
      };
    }

  componentDidMount() {

  }


  select() {
    parser.loadXML('Species', this.refs.Species.value, (importXML) => {
      this.setState({species: importXML});
    });

  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
      <div style={{float: 'left', marginLeft: '10px', width: '300px'}}>
      <span style={{fontSize: '30px'}}>Species: {this.state.species.Name}</span>
      <br />
      <select style={{float: 'left', margin:'20px 40px 20px 0', fontSize:'20px'}} ref='Species' onChange={this.select.bind(this)}>
        {SpeciesList.map((Species)=>
          <option key={Species}>{Species}</option>
        )}
      </select>
      <br/>
      <img key={this.state.species.Key} style={{height: '200px', maxWidth: '400px', display: 'block', margin: 'auto'}} src={`/Data/SpeciesImages/${this.state.species.Key}.png`} alt=''/>
      </div>
      <div style={{marginLeft: '330px'}}>
      <div className='navbar'>
        <div style={{float: 'left', width: '480px'}}>
        <h2>Starting Stats</h2>
        {characteristics.map((characteristic)=>
          <div className='stats-box' key={characteristic}>
          <div className='stats-top-box'><div style={{fontSize:'12px'}}>{characteristic}</div></div>
          <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>{this.state.species.StartingChars[characteristic]}</div></div>
          </div>
        )}
      <div><b>Wound Threshold:</b>&nbsp;{this.state.species.StartingAttrs.WoundThreshold}&emsp;<b>Strain Threshold:</b>&nbsp;{this.state.species.StartingAttrs.StrainThreshold}&emsp;<b>Starting XP:</b>&nbsp;{this.state.species.StartingAttrs.Experience}&emsp;</div>
      </div>
      </div>

      <div>
      <div style={{fontSize: '20px', width: '480px', maxHeight: '300px', overflow: 'scroll'}} dangerouslySetInnerHTML={{__html: this.state.species.Description}} />
      </div>

      </div>
      </div>
    );
  }
}
export default Species;

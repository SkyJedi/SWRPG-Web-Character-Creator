import React, { Component } from 'react';
var Data = require('../data.json');
var Header = {Weapons: {Name: 'Name', Type: 'Type', Dam: 'Damage', Range: 'RangeValue', Price: 'Price'},
              Armor: {Name: 'Name', Soak: 'Soak', Defense: 'Defense', Encum: 'Encumbrance', Price: 'Price'},
              Gear: {Name: 'Name', Type: 'Type', Rarity: 'Rarity', Price: 'Price'}
            };

class Equipment extends Component {

  constructor() {
      super();
      this.state = {
        Data: {
          Weapons: Data.Weapons,
          Armor: Data.Armor,
          Gear: Data.Gear
        },
        display: 'Weapons',
        selected: {image: 'Default'}
      }
    }

  componentDidMount() {
  }

  setDisplay(type) {
    this.setState({display: type});
  }

  select(key){
    var selected = Object.assign({}, this.state.Data[this.state.display][key]);
    if (this.state.display === 'Weapons') selected.image = 'Weapon'+key;
    else selected.image = this.state.display+key;
    this.setState({selected});
  }

  defaultImage() {
    var selected = Object.assign({}, this.state.selected);
    selected.image = 'Default';
    this.setState({selected});
  }

  render() {
    return (
      <div>
        <div style={{float:'left'}}>
          <div>
            <button onClick={this.setDisplay.bind(this, 'Weapons')} style={{width: '75px', display: 'inline-block'}}>Weapons</button>
            <button onClick={this.setDisplay.bind(this, 'Armor')}  style={{width: '75px', display: 'inline-block'}}>Armor</button>
            <button onClick={this.setDisplay.bind(this, 'Gear')}  style={{width: '75px', display: 'inline-block'}}>Gear</button>
          </div>
        <div className='box' style={{width: '460px', padding: '0', height: '300px', overflow: 'scroll'}}>
          <table>
            <thead>
              <tr>{Object.keys(Header[this.state.display]).map((key)=><td key={key}><b>{key}</b></td>)}</tr>
            </thead>
            <tbody>
              {Object.keys(this.state.Data[this.state.display]).map((key)=>
              <tr key={key}>{Object.keys(Header[this.state.display]).map((key2)=><td key={key2} onClick={this.select.bind(this, key, key2)} style={{fontSize: '14px', padding: '2px 5px'}}>{this.state.Data[this.state.display][key][Header[this.state.display][key2]]}</td>)}</tr>
            )}
          </tbody>
          </table>
        </div>

        <div className='box' style={{width: '460px', padding: '0', height: '300px', overflow: 'scroll'}}>
          <table>
            <thead>
              <tr><td>FutureWords</td></tr>
            </thead>
            <tbody>
              <tr><td>FutureWords</td></tr>
          </tbody>
          </table>
        </div>

        <div style={{width: '320px', margin: '5px', display: 'inline-block'}}>
          <img src={`/Data/EquipmentImages/${this.state.selected.image}.png`} alt='' onError={this.defaultImage.bind(this)}  style={{width: '320px', padding: '0'}} />
        </div>

        <div style={{width: '320px', margin: '5px', display: 'inline-block', verticalAlign: 'top'}}>
  
        </div>

        <div style={{width: '320px', margin: '5px', display: 'inline-block', verticalAlign: 'top'}}>
          <div style={{fontSize: '14px', width: '320px', maxHeight: '300px', overflow: 'scroll'}} dangerouslySetInnerHTML={{__html: this.state.selected.Description}} />
        </div>




        </div>
      </div>
);
  }
}
export default Equipment;

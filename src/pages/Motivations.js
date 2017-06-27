import React, { Component } from 'react';
var Data = require('../data.json');
import Popup from 'react-popup';
import '../popup.css';

class Motivations extends Component {

  constructor() {
      super();
      this.state = {
        Motivations: Data.Motivations,
        SpecificMotivations: Data.SpecificMotivations,
        selectedMotivation: {Description: ''},
        selectedSpecificMotivation: {Description: ''},
        listMotivation: {},
      };
    }

  popupAdd() {
    Popup.create({
    title: 'Add Motivation',
    className: 'character',
    content:
    <div style={{float: 'left'}}>
      <div>
      <b>Motivation:&nbsp;</b>
      <select id='Motivations' style={{margin: '10px 5px 10px 0', padding: '5px', width: '180px'}}>
      {Object.keys(this.state.Motivations).map((key)=>
        <option id={key} key={key}>{this.state.Motivations[key].Name}</option>
      )}
    </select>
      </div>
    </div>,
    buttons: {
        left: ['cancel'],
        right: [{
            text: 'Add',
            className: 'success',
            action: () => {
              let list = Object.assign({}, this.state.listMotivation);
              list[Object.keys(list).length] = this.state.Motivations[document.getElementById('Motivations').options[document.getElementById('Motivations').selectedIndex].id]
              this.setState({listMotivation: list});
              this.setState({selectedMotivation: list[Object.keys(list).length - 1]});
              this.setState({selectedSpecificMotivation: this.state.SpecificMotivations[list[Object.keys(list).length - 1].SpecificMotivations[0]]})
              Popup.close();
            }
        }]
    }});
  }

  selectMotivation(key) {
    this.setState({selectedMotivation: this.state.listMotivation[key]});
  }

  selectSpecificMotivation() {
    let selected =  this.state.SpecificMotivations[this.refs.SpecificMotivations.options[this.refs.SpecificMotivations.selectedIndex].id];
    this.setState({selectedSpecificMotivation: selected});
  }

  render() {
    return (
      <div>
      <div style={{float:'left', width: '200px'}}>
        <div className='box' style={{height:'200px', width: '240px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>SELECT MOTIVATION:</b>
        <table>
        <thead>
        <tr><td>Type</td><td>Specific</td></tr>
        </thead>
        <tbody>
        {Object.keys(this.state.listMotivation).map((key)=>
          <tr onClick={this.selectMotivation.bind(this, key)} key={key}><td>{this.state.Motivations[this.state.listMotivation[key].Key].Name}</td>
          <td>
            <select ref='SpecificMotivations' style={{margin: '10px 5px 10px 0', padding: '5px', width: '130px'}} onChange={this.selectSpecificMotivation.bind(this)}>
            {this.state.listMotivation[key].SpecificMotivations.map((subkey)=>
              <option id={subkey} key={subkey}>{this.state.SpecificMotivations[subkey].Name}</option>
            )}
          </select></td></tr>
        )}
        </tbody>
        </table>
        </div>
        <div style={{marginLeft: '5px'}}>
        <button onClick={this.popupAdd.bind(this)} style={{width: '75px', display: 'inline-block'}}>New</button>
        <button style={{width: '75px', display: 'inline-block'}}>Remove</button>
        </div>
      </div>
      <div style={{float: 'none', marginLeft: '280px'}}>
        <div className='box' style={{height:'400px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>NOTES:</b>
          <textarea ref='Notes' style={{height: '30%', width: '370px', margin: '10px', resize: 'none'}}  />
          <div style={{fontSize: '20px', width: '98%', maxHeight: '30%', overflow: 'auto', margin: '5px'}}  dangerouslySetInnerHTML={{__html: this.state.selectedMotivation.Description}}/>
          <div style={{fontSize: '20px', width: '98%', maxHeight: '30%', overflow: 'auto', margin: '5px'}}  dangerouslySetInnerHTML={{__html: this.state.selectedSpecificMotivation.Description}}/>
        </div>
      </div>
      </div>
    );
  }
  }
export default Motivations;

import React, { Component } from 'react';
var parser = require('../functions/xmlParser');
import Popup from 'react-popup';
import '../popup.css';

class Obligations extends Component {

  constructor() {
      super();
      this.state = {
        Obligations: {},
        listObligation: {},
        selectedObligation: {Description: ''},
      };
    }

  componentDidMount() {
    parser.loadXML('Obligations', null, (importXML) => {
      this.setState({Obligations: importXML});
    });
  }


  popupAdd() {
    Popup.create({
    title: 'Add Obligation',
    className: 'character',
    content:
    <div style={{float: 'left'}}>
      <div>
      <b>Obligation:&nbsp;</b>
      <select id='Obligation' style={{margin: '10px 5px 10px 0', padding: '5px', width: '180px'}}>
      {Object.keys(this.state.Obligations).map((key)=>
        <option value={key} key={key}>{this.state.Obligations[key].Name}</option>
      )}
      </select>
      </div>
      <div>
      <b>Size:&nbsp;</b>
      <input type="text" id='Size' defaultValue='10' style={{marginLeft: '40px', width: '30px', textAlign: 'center'}}/>
      </div>
    </div>,
    buttons: {
        left: ['cancel'],
        right: [{
            text: 'Add',
            className: 'success',
            action: () => {
              let list = Object.assign({}, this.state.listObligation);
              let tempOb = this.state.Obligations[document.getElementById('Obligation').value];
              tempOb['Size'] = document.getElementById('Size').value
              list[Object.keys(list).length] = tempOb
              this.setState({listObligation: list});
              this.setState({selectedObligation: tempOb});
              Popup.close();
            }
        }]
    }});
  }

  selectObligation(key) {
    this.setState({selectedObligation: this.state.listObligation[key]});
  }

  render() {
    return (
      <div>
      <div style={{float:'left', width: '200px'}}>
        <div className='box' style={{height:'200px', width: '200px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>SELECT OBLIGATION:</b>
        <table>
        <thead>
        <tr><td>Type</td><td>Size</td></tr>
        </thead>
        <tbody>
        {Object.keys(this.state.listObligation).map((key)=>
          <tr onClick={this.selectObligation.bind(this, key)} key={key}><td>{this.state.listObligation[key].Name}</td><td>{this.state.listObligation[key].Size}</td></tr>
        )}
        </tbody>
        </table>
        </div>
        <div style={{marginLeft: '5px'}}>
        <button onClick={this.popupAdd.bind(this)} style={{width: '75px', display: 'inline-block'}}>New</button>
        <button style={{width: '75px', display: 'inline-block'}}>Remove</button>
        </div>
      </div>
      <div style={{float: 'none', marginLeft: '240px'}}>
        <div className='box' style={{height:'400px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>NOTES:</b>
          <textarea ref='Notes' style={{height: '200px', width: '370px', margin: '10px', resize: 'none'}}  />
          <div style={{fontSize: '20px', width: '98%', maxHeight: '30%', overflow: 'auto', margin: '5px'}}  dangerouslySetInnerHTML={{__html: this.state.selectedObligation.Description}}/>

        </div>
      </div>
      </div>


        );
  }
}
export default Obligations;

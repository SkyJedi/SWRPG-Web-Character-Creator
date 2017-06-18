import React, { Component } from 'react';
import Popup from 'react-popup';
import '../popup.css';

class Description extends Component {

  popupImage() {
    Popup.create({
    title: 'Modify Character Image',
    className: 'character',
    content:
    <div style={{float: 'left'}}>
      <div>
      <b>Image URL:&nbsp;</b>
        <input className='textinput' id='imageURL' style={{textAlign: 'center', width: '7em'}} /><br/>
      </div>
    </div>,
    buttons: {
        left: ['cancel'],
        right: [{
            text: 'Add',
            className: 'success',
            action: () => {
              Popup.close();
            }
        }]
    }});
  }

  render() {
    return (
      <div className='box'>
      <table style={{fontSize: '15px', float: 'left'}}>
      <tbody>
        <tr>
          <td>Player Name:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="playerName" /></td>
        </tr>
        <tr>
          <td>Character Name:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="characterName" /></td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="geder" /></td>
        </tr>
        <tr>
          <td>Age:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="Age" /></td>
        </tr>
        <tr>
          <td>Height:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="height" /></td>
        </tr>
        <tr>
          <td>Build:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="build" /></td>
        </tr>
        <tr>
          <td>Hair:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="hair" /></td>
        </tr>
        <tr>
          <td>Eyes:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="eyes" /></td>
        </tr>
      </tbody>
      </table>
      <div style={{marginLeft: '500px'}}>
      <img src={`/Data/SpeciesImages/default.png`} alt=''/>
      <button onClick={this.popupImage.bind(this)}>Select Image</button>

      </div>

      </div>
    );
  }
}
export default Description;

import React, { Component } from 'react';
import Popup from 'react-popup';
import '../popup.css';

class Description extends Component {

  setDescription(e) {
    e.preventDefault();
    let currentCharacter = this.props.currentCharacter;
    let traits = ['playerName', 'characterName', 'gender', 'age', 'height', 'build', 'hair', 'eyes']
    traits.forEach((trait)=>{
    currentCharacter.description[trait] = this.refs[trait].value;
    this.refs[trait].value = '';
    })
    this.props.updateCharacter(currentCharacter);
  }

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
      <form onSubmit={ this.setDescription.bind(this) } style={{fontSize: '15px', float: 'left'}}>
      <table>
      <tbody>
        <tr>
          <td>Player Name:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="playerName" placeholder={ this.props.currentCharacter.description['playerName'] } /></td>
        </tr>
        <tr>
          <td>Character Name:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="characterName" placeholder={ this.props.currentCharacter.description['characterName'] } /></td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="gender" placeholder={ this.props.currentCharacter.description['gender'] } /></td>
        </tr>
        <tr>
          <td>Age:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="age" placeholder={ this.props.currentCharacter.description['age'] } /></td>
        </tr>
        <tr>
          <td>Height:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="height" placeholder={ this.props.currentCharacter.description['height'] } /></td>
        </tr>
        <tr>
          <td>Build:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="build" placeholder={ this.props.currentCharacter.description['build'] } /></td>
        </tr>
        <tr>
          <td>Hair:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="hair" placeholder={ this.props.currentCharacter.description['hair'] } /></td>
        </tr>
        <tr>
          <td>Eyes:</td>
          <td><input className='textinput' style={{width:'160px'}} ref="eyes" placeholder={ this.props.currentCharacter.description['eyes'] } /></td>
        </tr>
      </tbody>
      </table>
      <button>Save</button>
    </form>
      <div style={{marginLeft: '500px'}}>
      <img src={`/Data/SpeciesImages/default.png`} alt=''/>
      <button onClick={this.popupImage.bind(this)}>Select Image</button>

      </div>

      </div>
    );
  }
}
export default Description;

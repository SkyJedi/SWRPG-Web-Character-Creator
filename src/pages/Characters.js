import React, { Component } from 'react';

class Characters extends Component {

  newCharacter() {
    this.props.createCharacter();
    this.props.setPage('Description')
  }

  setCurrentCharacter(key) {
    this.props.setCurrentCharacter(key);
  }

  deleteCharacter(key) {
    this.props.deleteCharacter(key);
  }

  render() {
    return (
      <div>
      <div className='box' style={{height:'400px'}}>
      <table style={{float: 'left', padding: '0px', margin: '10px 0 10px 15px'}}>
        <thead><tr><td><b>Character Name</b></td></tr></thead>
        <tbody>
          {Object.keys(this.props.characters).map((k)=>
            <tr key={k} onClick={ this.setCurrentCharacter.bind(this, k) }><td>{ this.props.characters[k].description.characterName }</td></tr>
          )}
        </tbody>
      </table>
      </div>
      <div style={{display: 'block'}}>
        <button style={{display: 'block'}} onClick={ this.newCharacter.bind(this) }>New</button>
        <button style={{display: 'block'}} onClick={ this.deleteCharacter.bind(this) }>Remove</button>
      </div>
      </div>
    );
  }
}
export default Characters;

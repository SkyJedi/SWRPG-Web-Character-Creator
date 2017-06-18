import React, { Component } from 'react';
import * as firebase from 'firebase';
var channel = window.location.pathname.slice(1).toLowerCase();

class Characters extends Component {
  constructor() {
      super();
      this.state = {
        characters: {},
        charactersRef: firebase.database().ref().child(`${channel}`).child('characters'),
      };
    }

  componentDidMount() {
    this.state.charactersRef.on('value', snap => {
      if (snap.val() != null) {
        this.setState({characters: snap.val()});
      }
    });
  }

  render() {
    return (
      <div>
      <form>
      <div className='box' style={{height:'400px'}}>
      <ol style={{float: 'left', padding: '0px', margin: '10px 0 10px 0'}}>
      <div style={{float: 'left', margin: '5px 0 2px 5px'}}>
      <span>Character Name</span>
      {Object.keys(this.state.characters).map((k)=>
        <li>key={k}>{this.state.characters[k].Name}</li>
      )}
      </div>
      </ol>
      </div>
      <div style={{display: 'block'}}>
        <button style={{display: 'block'}}>New</button>
        <button style={{display: 'block'}}>Select</button>
        <button style={{display: 'block'}}>Remove</button>
      </div>
      </form>
      </div>
    );
  }
}
export default Characters;

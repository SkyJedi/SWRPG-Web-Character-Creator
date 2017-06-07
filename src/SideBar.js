import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class SideBar extends Component {

  render() {
    return (
      <div>
        <button>Characters</button>
        <button>Description</button>
        <button>Background</button>
        <button>Obligations</button>
        <button>Species</button>
        <button>Career</button>
        <button>Characteristics</button>
        <button>Specializations</button>
        <button>Motivations</button>
        <button>Skills</button>
        <button>Equipment</button>
      </div>
    );
  }
}
export default SideBar;

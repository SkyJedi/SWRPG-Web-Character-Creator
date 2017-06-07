import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class SideBar extends Component {

  setPage(page) {
    this.props.setDisplayPage(page);
  }

  render() {
    return (
      <div>
        <button onClick={this.setPage.bind(this, 'Characters')}>Characters</button>
        <button onClick={this.setPage.bind(this, 'Description')}>Description</button>
        <button onClick={this.setPage.bind(this, 'Background')}>Background</button>
        <button onClick={this.setPage.bind(this, 'Olbigation')}>Obligations</button>
        <button onClick={this.setPage.bind(this, 'Species')}>Species</button>
        <button onClick={this.setPage.bind(this, 'Career')}>Career</button>
        <button onClick={this.setPage.bind(this, 'Characteristics')}>Characteristics</button>
        <button onClick={this.setPage.bind(this, 'Specializations')}>Specializations</button>
        <button onClick={this.setPage.bind(this, 'Motivations')}>Motivations</button>
        <button onClick={this.setPage.bind(this, 'Skills')}>Skills</button>
        <button onClick={this.setPage.bind(this, 'Equipment')}>Equipment</button>
      </div>
    );
  }
}
export default SideBar;
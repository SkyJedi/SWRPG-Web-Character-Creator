import React, { Component } from 'react';
import './index.css';
var build = require('./parser.js').Build;


class TopBar extends Component {

  Build() {
    build();
  }

  render() {
    return (
      <div>
      <div className='navbar'>
      <div><b>Total XP:</b>&nbsp;100&emsp;<b>Used XP:</b>&nbsp;0&emsp;<b>Unused XP:</b>&nbsp;100&emsp;<b>Olbigation:</b>&nbsp;10&emsp;<b>Credits:</b>&nbsp;1000</div>
      </div>
      <button style={{display: 'inline-block', margin: '0'}} onClick={this.Build.bind(this)}>Update</button>
      </div>
    );
  }
}
export default TopBar;

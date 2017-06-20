import React, { Component } from 'react';
import './index.css';
var build = require('./functions/MasterParser.js').Build;


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
      <button style={{background: 'transparent', border: 'none', display: 'inline-block', margin: 'auto', verticalAlign: 'middle', width: '20px'}} onClick={this.Build.bind(this)} />
      </div>
    );
  }
}
export default TopBar;

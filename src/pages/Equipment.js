import React, { Component } from 'react';
var Data = require('../data.json');


class Equipment extends Component {

  constructor() {
      super();
      this.state = {
        Weapons: Data.Weapons,
        Armor: Data.Armor,
        Gear: Data.Gear,
      }
    }

  componentDidMount() {
    }

  render() {
    return (
      <h1>Equipment</h1>
    );
  }
}
export default Equipment;

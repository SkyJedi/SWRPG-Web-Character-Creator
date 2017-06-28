import React, { Component } from 'react';
var Data = require('../data.json');

class Skills extends Component {

  constructor() {
      super();
      this.state = {
        Skills: Data.Skills,
        selectedSkill: Data.Skills['ASTRO'],
      };
    }

  componentDidMount() {
  }

  selectSkill(key) {
    this.setState({selectedSkill: this.state.Skills[key]})
  }

  render() {
    return (
      <div className='box' style={{height:'auto', width: 'auto', marginBottom: '200px'}}>
        <table>
          <thead>
            <tr>
              <td>Skill</td>
              <td>Career</td>
              <td>Type</td>
              <td>Career</td>
              <td>Talent</td>
              <td>Attach</td>
              <td>Item</td>
              <td>Buy</td>
              <td>Total</td>
              <td>Dice Pool</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.Skills).map((key)=>
              <tr key={key} onClick={this.selectSkill.bind(this, key)}>
                <td style={{width: '800px'}}>{this.state.Skills[key].Name} ({this.state.Skills[key].CharKey})</td>
                <td style={{textAlign: 'center'}}><img className='tinydie' src={`/images/x.png`} alt=''/></td>
                <td>{this.state.Skills[key].TypeValue.slice(2)}</td>
                <td style={{textAlign: 'center'}}>0</td>
                <td style={{textAlign: 'center'}}>0</td>
                <td style={{textAlign: 'center'}}>0</td>
                <td style={{textAlign: 'center'}}>0</td>
                <td style={{textAlign: 'center'}}>Buy</td>
                <td style={{textAlign: 'center'}}>3</td>
                <td><img className='tinydie' src={`/images/green.png`} alt=''/><img className='tinydie' src={`/images/green.png`} alt=''/><img className='tinydie' src={`/images/green.png`} alt=''/></td>
              </tr>
            )}
          </tbody>
        </table>
        <div style={{fontSize: '20px', width: '98%', maxHeight: '30%', overflow: 'auto', margin: '5px'}}  dangerouslySetInnerHTML={{__html: this.state.selectedSkill.Description}}/>
      </div>
    );
  }
}
export default Skills;

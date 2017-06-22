import React, { Component } from 'react';
var Data = require('../data.json');

class Specializations extends Component {

  constructor() {
      super();
      this.state = {
        Specializations: Data.Specializations,
        selectedSpecialization: Data.Specializations[Object.keys(Data.Specializations)[0]],
        Talents: Data.Talents,
      }
    }

  componentDidMount() {
    }

  selectSpecialization() {
    let selectedSpecialization = this.state.Specializations[this.refs.Specializations.options[this.refs.Specializations.selectedIndex].id];
    this.setState({selectedSpecialization: selectedSpecialization});
  }

  toggleCheckbox(row, col) {
    let selectedSpecialization = Object.assign({}, this.state.selectedSpecialization);
    console.log(row + col)
    selectedSpecialization.Talents[row][col].isChecked = !selectedSpecialization.Talents[row][col].isChecked;
    this.setState({selectedSpecialization: selectedSpecialization})
  }

  render() {
    return (

      <div style={{float:'left', width: 'auto', height:'1000px'}}>
        <div className='box' style={{height:'auto', width: 'auto'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>SPECIALIZATION:</b>
          <select style={{margin: '10px 5px 10px 0', padding: '5px', width: '180px', verticalAlign: 'top'}} ref='Specializations' onChange={this.selectSpecialization.bind(this)}>
            {Object.keys(this.state.Specializations).map((key)=>
              <option id={key} key={key}>{this.state.Specializations[key].Name}</option>
            )}
          </select>
          <button style={{display: 'inline-block'}}>PURCHASE</button>
          <button style={{display: 'inline-block'}}>REMOVE</button>
          <div style={{fontSize: '20px', width: '98%', maxHeight: '240px', overflow: 'auto', margin: '5px'}} />
          {Object.keys(this.state.selectedSpecialization.Talents).map((row)=>
            <div key={row} style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
              {Object.keys(this.state.selectedSpecialization.Talents[row]).map((col)=>
                <div key={col} className='box' style={{height:'100px', width: '150px'}}>
                  <input type='checkbox' ref={row + col} checked={this.state.selectedSpecialization.Talents[row][col].isChecked} onChange={this.toggleCheckbox.bind(this, row, col)} />
                  <label style={{fontSize:'15px'}}>{this.state.Talents[this.state.selectedSpecialization.Talents[row][col].Key].Name}</label>
                  <div style={{fontSize: '10px', width: '98%', height: '60%', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.Talents[this.state.selectedSpecialization.Talents[row][col].Key].Description}} />
                  <div style={{bottom: '0', float: 'right'}}><b>Cost: {this.state.selectedSpecialization.Talents[row][col].Cost}</b></div>
                </div>
              )}
            </div>
          )}







        </div>
      </div>
    );
  }
}

export default Specializations;

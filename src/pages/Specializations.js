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
    selectedSpecialization.Talents[row][col].isChecked = !selectedSpecialization.Talents[row][col].isChecked;
    selectedSpecialization = this.checkDisabled(selectedSpecialization);
    if (selectedSpecialization !== 0) this.setState({selectedSpecialization: selectedSpecialization});
  }

  topConnector(row, col) {
    let background = '';
    if (row === 'row1') background = 'transparent';
    else if (this.state.selectedSpecialization.Talents[row][col].Direction.Up === true) background = 'black';
    return background;
  }

  sideConnector(row, col) {
    let background = '';
    if (col === 'col4') background = 'transparent';
    else if (this.state.selectedSpecialization.Talents[row][col].Direction.Right === true) background = 'black';
    return background;
  }

  checkDisabled(selectedSpecialization) {
    let rows = ['row5', 'row4', 'row3', 'row2', 'row1'];
    let cols = ['col4', 'col3', 'col2', 'col1'];
    for (var i=0; i<rows.length; i++) {
      for (var j=0; j<cols.length; j++) {
        if (rows[i] !== 'row1') selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled = true;
        if (selectedSpecialization.Talents[rows[i]][cols[j]].Direction.Up === true && selectedSpecialization.Talents[rows[i+1]][cols[j]].isChecked === true) {
          selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled = false;
        } else if (selectedSpecialization.Talents[rows[i]][cols[j]].Direction.Down === true && selectedSpecialization.Talents[rows[i-1]][cols[j]].isChecked === true) {
          selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled = false;
        } else if (selectedSpecialization.Talents[rows[i]][cols[j]].Direction.Left === true && selectedSpecialization.Talents[rows[i]][cols[j+1]].isChecked === true) {
          selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled = false;
        } else if (selectedSpecialization.Talents[rows[i]][cols[j]].Direction.Right === true && selectedSpecialization.Talents[rows[i]][cols[j-1]].isChecked === true) {
          selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled = false;
        } else if (selectedSpecialization.Talents[rows[i]][cols[j]].isDisabled === true && selectedSpecialization.Talents[rows[i]][cols[j]].isChecked === true) {
          return 0;
        }
      }
    }
    return selectedSpecialization;
  }

  render() {
    return (

      <div style={{float:'left', width: 'auto', height:'1000px'}}>
        <div className='box' style={{height:'1000px', width: 'auto'}}>
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
            <div key={row} style={{width: '800px', height: 'auto', margin: '0px 0px 0px 20px'}}>
              <div style={{verticalAlign: 'bottom', width:'30px', height: '30px', background: this.topConnector(row, 'col1'), marginLeft: '75px', display: 'inline-block'}}></div>
              <div style={{verticalAlign: 'bottom', width:'30px', height: '30px', background: this.topConnector(row, 'col2'), marginLeft: '170px', display: 'inline-block'}}></div>
              <div style={{verticalAlign: 'bottom', width:'30px', height: '30px', background: this.topConnector(row, 'col3'), marginLeft: '170px', display: 'inline-block'}}></div>
              <div style={{verticalAlign: 'bottom', width:'30px', height: '30px', background: this.topConnector(row, 'col4'), marginLeft: '170px', display: 'inline-block'}}></div>
              {Object.keys(this.state.selectedSpecialization.Talents[row]).map((col)=>
                <div key={col}>
                  <div className='box' style={{height:'100px', width: '150px', margin: '0px'}}>
                    <input type='checkbox' ref={row + col} checked={this.state.selectedSpecialization.Talents[row][col].isChecked} disabled={this.state.selectedSpecialization.Talents[row][col].isDisabled} onChange={this.toggleCheckbox.bind(this, row, col)} />
                    <label style={{fontSize:'12px'}}>{this.state.Talents[this.state.selectedSpecialization.Talents[row][col].Key].Name}</label>
                    <div style={{fontSize: '10px', width: '98%', height: '60%', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.Talents[this.state.selectedSpecialization.Talents[row][col].Key].Description}}></div>
                    <div style={{bottom: '0', float: 'right'}}><b>Cost: {this.state.selectedSpecialization.Talents[row][col].Cost}</b></div>
                  </div>
                  <div style={{width:'20px', height: '30px', background: this.sideConnector(row, col), float: 'left', marginTop: '50px'}}></div>
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

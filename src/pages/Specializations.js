import React, { Component } from 'react';
var List = require('../functions/xmlNames');
var parser = require('../functions/xmlParser');

class Specializations extends Component {



  constructor() {
      super();
      this.state = {
        Specializations: {},
        selectedSpecialization: {
          row1col1: {isChecked: true},
          row1col2: {isChecked: false},
          row1col3: {isChecked: false},
          row1col4: {isChecked: false},
          row2col1: {isChecked: false},
          row2col2: {isChecked: false},
          row2col3: {isChecked: false},
          row2col4: {isChecked: false},
          row3col1: {isChecked: false},
          row3col2: {isChecked: false},
          row3col3: {isChecked: false},
          row3col4: {isChecked: false},
          row4col1: {isChecked: false},
          row4col2: {isChecked: false},
          row4col3: {isChecked: false},
          row4col4: {isChecked: false},
          row5col1: {isChecked: false},
          row5col2: {isChecked: false},
          row5col3: {isChecked: false},
          row5col4: {isChecked: false},
        },
      }
    }

  componentDidMount() {

    }

  toggleCheckbox(slot) {
    console.log(this)
    let selectedSpecialization = Object.assign({}, this.state.selectedSpecialization);
    selectedSpecialization[slot].isChecked = !selectedSpecialization[slot].isChecked;
    this.setState({selectedSpecialization: selectedSpecialization})
    }

  render() {
    return (
      <div style={{float:'left', width: 'auto', height:'1000px'}}>
        <div className='box' style={{height:'auto', width: 'auto'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>SPECIALIZATION:</b>
          <select style={{margin: '10px 5px 10px 0', padding: '5px', width: '180px', verticalAlign: 'top'}} ref='Specialization'>

          </select>
          <button style={{display: 'inline-block'}}>PURCHASE</button>
          <button style={{display: 'inline-block'}}>REMOVE</button>
          <div style={{fontSize: '20px', width: '98%', maxHeight: '240px', overflow: 'auto', margin: '5px'}} />
          <div style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row1col1' checked={this.state.selectedSpecialization.row1col1.isChecked} onChange={this.toggleCheckbox.bind(this, 'row1col1')} />
              <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:5</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row1col2' checked={this.state.selectedSpecialization.row1col2.isChecked} onChange={this.toggleCheckbox.bind(this, 'row1col2')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:5</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row1col3' checked={this.state.selectedSpecialization.row1col3.isChecked} onChange={this.toggleCheckbox.bind(this, 'row1col3')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:5</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row1col4' checked={this.state.selectedSpecialization.row1col4.isChecked} onChange={this.toggleCheckbox.bind(this, 'row1col4')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:5</b></div>
            </div>
          </div>
          <div style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row2col1' checked={this.state.selectedSpecialization.row2col1.isChecked} onChange={this.toggleCheckbox.bind(this, 'row2col1')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:10</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row2col2' checked={this.state.selectedSpecialization.row2col2.isChecked} onChange={this.toggleCheckbox.bind(this, 'row2col2')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:10</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row2col3' checked={this.state.selectedSpecialization.row2col3.isChecked} onChange={this.toggleCheckbox.bind(this, 'row2col3')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:10</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row2col4' checked={this.state.selectedSpecialization.row2col4.isChecked} onChange={this.toggleCheckbox.bind(this, 'row2col4')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:10</b></div>
            </div>
          </div>
          <div style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col1' checked={this.state.selectedSpecialization.row3col1.isChecked} onChange={this.toggleCheckbox.bind(this, 'row3col1')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:15</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col2' checked={this.state.selectedSpecialization.row3col2.isChecked} onChange={this.toggleCheckbox.bind(this, 'row3col2')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:15</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col3' checked={this.state.selectedSpecialization.row3col3.isChecked} onChange={this.toggleCheckbox.bind(this, 'row3col3')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:15</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col4' checked={this.state.selectedSpecialization.row3col4.isChecked} onChange={this.toggleCheckbox.bind(this, 'row3col4')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:15</b></div>
            </div>
          </div>
          <div style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col1' checked={this.state.selectedSpecialization.row3col1.isChecked} onChange={this.toggleCheckbox.bind(this, 'row4col1')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:20</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col2' checked={this.state.selectedSpecialization.row3col2.isChecked} onChange={this.toggleCheckbox.bind(this, 'row4col2')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:20</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col3' checked={this.state.selectedSpecialization.row3col3.isChecked} onChange={this.toggleCheckbox.bind(this, 'row4col3')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:20</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row3col4' checked={this.state.selectedSpecialization.row3col4.isChecked} onChange={this.toggleCheckbox.bind(this, 'row4col4')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:20</b></div>
            </div>
          </div>
          <div style={{width: 'auto', height: '130px', margin: '10px 5px'}}>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row5col1' checked={this.state.selectedSpecialization.row5col1.isChecked} onChange={this.toggleCheckbox.bind(this, 'row5col1')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:25</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row5col2' checked={this.state.selectedSpecialization.row5col2.isChecked} onChange={this.toggleCheckbox.bind(this, 'row5col2')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:25</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row5col3' checked={this.state.selectedSpecialization.row5col3.isChecked} onChange={this.toggleCheckbox.bind(this, 'row5col3')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:25</b></div>
            </div>
            <div className='box' style={{height:'100px', width: '150px'}}>
              <input type="checkbox" ref='row5col4' checked={this.state.selectedSpecialization.row5col4.isChecked} onChange={this.toggleCheckbox.bind(this, 'row5col4')} />
                <label>TalentName</label>
              <div style={{height: '70%'}}>BOOBS</div>
              <div style={{bottom: '0', float: 'right'}}><b>Cost:25</b></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Specializations;

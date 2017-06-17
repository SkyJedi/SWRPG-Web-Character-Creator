import React, { Component } from 'react';
var CareerList = require('../functions/xmlNames').Careers
var SpecializationList = require('../functions/xmlNames').Specializations
var parser = require('../functions/xmlParser');



class Career extends Component {

  constructor() {
      super();
      this.state = {
        Careers: {},
        selectedCareer: {Description: '', CareerSkills: ''},
        Specializations: {},
        careerSpecializations: {},
        selectedSpecialization: {Description: '', CareerSkills: ''},
      };
    }

  componentDidMount() {
      let list = {};
      CareerList.forEach((Career) => {
        parser.loadXML('Careers', Career, (importXML) => {
          list[importXML.Key]=importXML;
          this.setState({Careers: list});
        });
      });
      let list1 = {}
      SpecializationList.forEach((Specialization) => {
        parser.loadXML('Specializations', Specialization, (importXML) => {
          list1[importXML.Key]=importXML;
          this.setState({Specializations: list1});
        });
      });
    }

  selectCareer() {
    let Career = this.state.Careers[this.refs.Careers.options[this.refs.Careers.selectedIndex].id];
    let careerSpecializations = {};
    Career.Specializations.forEach((key) =>{
      careerSpecializations[key] = this.state.Specializations[key];
    });
    this.setState({selectedCareer: Career});
    this.setState({careerSpecializations: careerSpecializations});
    this.setState({selectedSpecialization: {Description: '', CareerSkills: ''}});
  }

  selectSpecialization() {
    let Specialization = this.state.Specializations[this.refs.Specializations.options[this.refs.Specializations.selectedIndex].id];
    this.setState({selectedSpecialization: Specialization});

  }


  render() {
    return (
      <div>
        <div style={{float: 'left', width: '290px'}}>
          <div className='box' style={{height:'250px', width: '250px'}}>
            <b style={{margin: '5px 70px 5px 5px', padding: '5px', float: 'left'}}>SELECT CAREER:</b>
            <select style={{margin: '10px 5px 10px 10px', padding: '5px', float: 'left', width: '180px'}} ref='Careers' onChange={this.selectCareer.bind(this)}>
              {Object.keys(this.state.Careers).map((key)=>
                <option id={key} key={key}>{this.state.Careers[key].Name}</option>
              )}
            </select>
            <div style={{fontSize: '20px', width: '98%', maxHeight: '70%', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.selectedCareer.Description}} />
          </div>
          <div className='box' style={{height:'250px', width: '250px'}}>
            <b style={{margin: '5px', padding: '5px', float: 'left'}}>SELECT STARTING SPECIALIZATION:</b>
            <select style={{margin: '10px 5px 10px 10px', padding: '5px', float: 'left', width: '180px'}} ref='Specializations' onChange={this.selectSpecialization.bind(this)}>
              {Object.keys(this.state.careerSpecializations).map((key)=>
                <option id={key} key={key}>{this.state.careerSpecializations[key].Name}</option>
              )}
            </select>
            <div style={{fontSize: '20px', width: '98%', maxHeight: '70%', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.selectedSpecialization.Description}}/>
          </div>
        </div>
        <div>
          <div style={{width:'220px', display: 'inline-block'}}>
            <div className='box' style={{height:'250px', width: '200px', textAlign: 'center'}}>
              <b style={{margin: '5px'}}>SELECT CAREER SKILLS:</b>
                <div id="CareerSkills">
                  <ul style={{listStyleType: 'none', float: 'left', margin: '5px'}}>
                    {Object.keys(this.state.selectedCareer.CareerSkills).map((key) =>
                      <li style={{textAlign: 'left'}} id={this.state.selectedCareer.CareerSkills[key]} key={this.state.selectedCareer.CareerSkills[key]}><input type="checkbox"/>{this.state.selectedCareer.CareerSkills[key]}</li>
                    )}
                  </ul>
                </div>
            </div>
            <div className='box' style={{height:'250px', width: '200px', textAlign: 'center'}}>
              <b style={{margin: '5px'}}>SELECT SPECIALIZATION SKILLS:</b>
                <div id="CareerSkills">
                  <ul style={{listStyleType: 'none', float: 'left', margin: '5px'}}>
                    {Object.keys(this.state.selectedSpecialization.CareerSkills).map((key) =>
                      <li style={{textAlign: 'left'}} id={this.state.selectedSpecialization.CareerSkills[key]} key={this.state.selectedSpecialization.CareerSkills[key]}><input type="checkbox"/>{this.state.selectedSpecialization.CareerSkills[key]}</li>
                    )}
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
export default Career;

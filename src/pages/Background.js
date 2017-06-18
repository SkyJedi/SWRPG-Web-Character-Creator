import React, { Component } from 'react';
var Data = require('../data.json');

class Background extends Component {

    constructor() {
        super();
        this.state = {
          Classes: {},
          selectedClass:{Description: ''},
          Hooks: {},
          selectedHook:{Description: ''}
        };
      }

    componentDidMount() {
        this.setState({Classes: Data.Classes});
        this.setState({selectedClass: Data.Classes[Object.keys(Data['Classes'])[0]]});
        this.setState({Hooks: Data.Hooks});
        this.setState({selectedHook: Data.Hooks[Object.keys(Data['Hooks'])[0]]});
    }

    selectClasses() {
      this.setState({selectedClass: this.state.Classes[this.refs.Classes.options[this.refs.Classes.selectedIndex].id]});
    }

    selectHooks() {
      this.setState({selectedHook: this.state.Hooks[this.refs.Hooks.options[this.refs.Hooks.selectedIndex].id]});
    }

  render() {
    return (
      <div>
      <div style={{float:'left', width: '400px'}}>
        <div className='box' style={{height:'300px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>SOCIAL CLASS:</b>
          <select style={{margin: '10px 5px 10px 0', padding: '5px', float: 'right', width: '180px'}} ref='Classes' onChange={this.selectClasses.bind(this)}>
          {Object.keys(this.state.Classes).map((key)=>
            <option id={key} key={key}>{this.state.Classes[key].Name}</option>
          )}
          </select>
          <div style={{fontSize: '20px', width: '98%', maxHeight: '240px', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.selectedClass.Description}} />
        </div>
        <div className='box' style={{height:'300px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>BACKGROUND HOOK:</b>
          <select style={{margin: '10px 5px 10px 0', padding: '5px', float: 'right', width: '180px'}} ref='Hooks' onChange={this.selectHooks.bind(this)}>
          {Object.keys(this.state.Hooks).map((key)=>
            <option id={key} key={key}>{this.state.Hooks[key].Name}</option>
          )}
          </select>
          <div style={{fontSize: '20px', width: '98%', maxHeight: '260px', overflow: 'auto', margin: '5px'}} dangerouslySetInnerHTML={{__html: this.state.selectedHook.Description}} />
        </div>
      </div>
      <div style={{float: 'none', marginLeft: '450px'}}>
        <div className='box' style={{height:'625px'}}>
          <b style={{margin: '5px', padding: '5px', float: 'left'}}>STORY:</b>
          <textarea ref='Story' style={{height: '560px', width: '370px', margin: '10px', resize: 'none'}}  />
        </div>
      </div>
      </div>
    );
  }
}
export default Background;

import React, { Component } from 'react';
import Popup from 'react-popup';
import * as firebase from 'firebase';
import './index.css';
import './popup.css';

var channel = window.location.pathname.slice(1).toLowerCase();

class SideBar extends Component {

  render() {
    return (
      <div>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Characters</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Description</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Background</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Obligations</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Species</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Career</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Characteristics</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Specializations</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Motivations</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Skills</button>
        <button className='lrgButton' style={{display: 'block', width: '120px', margin: '15px 5px'}} >Equipment</button>
      </div>
    );
  }
}
export default SideBar;

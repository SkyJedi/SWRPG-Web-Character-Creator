import React, { Component } from 'react';
import './index.css';

var stats = ['Soak', 'Wounds', 'Strain'],
    characteristics = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence']

class BottomBar extends Component {

  render() {
    return (
      <div className='navbar' style={{float: 'right', width:'560px'}}>
      <div style={{float: 'left'}}>
      {stats.map((stat)=>
        <div className='stats-box' key={stat} >
        <div className='stats-top-box'><div style={{fontSize:'12px'}}>{stat}</div></div>
        <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>12</div></div>
        </div>
      )}
      <div className='stats-box'>
      <div className='stats-top-box'><div style={{fontSize:'12px'}}>Defense</div></div>
      <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>0 | 2</div></div>
      </div>
      </div>
      <div style={{float: 'left'}}>
      {characteristics.map((characteristic)=>
        <div className='stats-box' key={characteristic}>
        <div className='stats-top-box'><div style={{fontSize:'12px'}}>{characteristic}</div></div>
        <div className='stats-bottom-box'><div style={{fontSize:'20px', marginTop: '5px'}}>2</div></div>
        </div>
      )}
      </div>
      </div>
    );
  }
}
export default BottomBar;

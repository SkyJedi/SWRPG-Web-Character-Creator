import React, { Component } from 'react';
var characteristics = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence'];

class Characteristics extends Component {

  render() {
    return (
      <div className='box' style={{width:'650px'}}>
        <table style={{textAlign: 'center'}}>
          <thead>
            <tr><td style={{fontWeight: 'bold', fontSize: '15px'}}>SPECIES</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>TALENTS</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>ATTACH</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>ITEM</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>CYBER</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>BUY</td><td style={{fontWeight: 'bold', fontSize: '15px'}}>FINAL</td></tr>
          </thead>
          <tbody style={{verticalAlign: 'top'}}>
            {characteristics.map((key) =>
            <tr key={key}>
              <td><div className='box-characteristic'>2</div></td>
              <td><div className='box-characteristic'>0</div></td>
              <td><div className='box-characteristic'>0</div></td>
              <td><div className='box-characteristic'>0</div></td>
              <td><div className='box-characteristic'>2</div></td>
              <td>
                <div style={{width: '120px', height: '54px', margin: 'auto'}}>
                <button className='btnAdd' style={{float: 'left', display: 'inline-block'}}>-</button>
                <div className='box-characteristic' style={{display: 'inline-block'}}>2</div>
                <button className='btnAdd' style={{float: 'right', display: 'inline-block'}}>+</button>
                </div>
              </td>
              <td>
                <div>
                  <div className='box-characteristic' style={{borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}>4</div>
                  <div style={{height: '15px', fontSize: '12px', borderTopLeftRadius: '0', borderTopRightRadius: '0', marginTop: '-2px'}} className='box-characteristic'><b>{key}</b></div>
                  </div>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Characteristics;

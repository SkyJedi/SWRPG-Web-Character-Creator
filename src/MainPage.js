import React, { Component } from 'react';
import './index.css';
import SideBar from './SideBar';

var channel = window.location.pathname.slice(1).toLowerCase();

class MainPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        displayPage: Characters,
      };
    }

  setDisplayPage(page) {
      this.setState({displayPage: page});
    }

  render() {
    return (
      <div>
        <this.state.displayPage />
      </div>
    );
  }
}
export default MainPage;

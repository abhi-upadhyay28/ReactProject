import React from 'react';

import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  render() {
    return (
      <div className="App">
        
        <Main />
      </div>
    );
  }
}

export default App;

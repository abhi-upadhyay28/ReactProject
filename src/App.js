import React from 'react';

import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  render() {
    return (
      <BrowserRouter>
      <div >
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

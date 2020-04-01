import React from 'react';

import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store=ConfigureStore();

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  render() {
    return (
      
      <Provider store={store}>
        <BrowserRouter>
          <div >
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;

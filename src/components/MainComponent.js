import React from 'react';


import Menu from './MenuComponent';
import  DishDetail from './DishDetailComponent';
import  Header from './HeaderComponent';
import  Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null  
    };
  }
//   static defaultProps = { // <-- DEFAULT PROPS
//     details: []       // undefined gets converted to array,render won't trigger error
// }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}
  render() {
    let arr=this.state.dishes;
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail details={arr.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;

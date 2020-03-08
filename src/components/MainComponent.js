import React from 'react';


import Menu from './MenuComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import  DishDetail from './DishDetailComponent';
import  Header from './HeaderComponent';
import  Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS} from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';


import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES, 
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS
    };
  }
//   static defaultProps = { // <-- DEFAULT PROPS
//     details: []       // undefined gets converted to array,render won't trigger error
// }

  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        leader={this.state.leaders.filter((lead) => lead.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        />
      );
    };
    const DishWithId = ({match}) =>{
        return (
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId===parseInt(match.params.dishId,10))}
          />
        );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

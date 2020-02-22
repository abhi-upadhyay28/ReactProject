import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Container, Col, Row } from 'reactstrap';

class DishDetail extends Component {
  constructor(props){
      super(props);

        } 
    renderDish(dish){
        if(dish!=null){
            return(<Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            ); 
        }
        else{
            return(<div></div>);
        }
    }
    renderComments(comments){
        if(comments!=null){
            const x =  comments;
            var dish = x.map(comm => {
            return (
            <li key={comm.id}>
                <p>{comm.comment}</p>
                <p>--{comm.author},&nbsp;
                {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comm.date))}
                </p>
                </li>
            );
        })
    }
    else
    {
    return (<div></div>);
    }
        return(
                <div>
                <h4>Comments</h4>
                <ul class = "list-unstyled">{dish}</ul>
                </div>
        );
       
    }
  render(){
    //   const menu=this.props.dishes.map((dish) => {
    //       return(
    //           <div key={dish.id} className="col-12 col-md-5 m-1">
    //               <Card key={dish.id}
    //               onClick={()=>this.onDishSelect(dish)}>
    //                   <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                   <CardImgOverlay>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                   </CardImgOverlay>
    //               </Card>
    //           </div>

    //       );
    //   });
        const dish=this.props.details;
        if(dish==null)
        return (<div></div>);
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.details)}
                    {/* {this.renderComments(this.props.details.comments)} */}
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.details.comments)}
                </div>
            </div>
      );
  }
}
export default DishDetail;
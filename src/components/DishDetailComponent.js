import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'

    function RenderDish({dish}){
        if(dish!=null){
            return(<Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
    function RenderComments({comments, postComment, dishId}){
        if(comments!=null){
            //const x =  comments;
            //var dish = x.map(comm => {
            return (
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comm) => {
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
                })}
           
                </ul>
                {/* <CommentForm dishId={dishId} postComment={postComment} /> */}
                </div>
            );
        }
    else
    {
    return (<div></div>);
    }
        // return(
        //         <div>
        //         <h4>Comments</h4>
        //         <ul class = "list-unstyled">{dish}</ul>
        //         </div>
        // );
       
    }
  const DishDetail=(props)=>{
        //console.log('DishDetail Component render invoked');
        if(props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>

            );
        }
        else if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>

            );
        }
        //const dish=props.dish;
        else if(props.dish==null)
        return (<div></div>);
        else{
        return(
            <div className="container">
                <div className="row">
                  <Breadcrumb>
                   
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                  </div>
              </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish= {props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} 
                    postComment={props.postComment}
                    dishId={props.dish.id}/>
                    </div>
                </div>
            </div>
      );
    }
  }
export default DishDetail;
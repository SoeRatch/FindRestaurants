import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import viewRestaurantStyle from "../../../assets/jss/views/viewRestaurantStyle";

import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import CardIcon from "../../../components/Card/CardIcon";
import CardAvatar from "../../../components/Card/CardAvatar";
import foodimg from "../../../assets/img/food.jpg";
import Grid from "@material-ui/core/Grid";
import Star from "@material-ui/icons/Star";

class ViewRestaurant extends React.Component{

	state={
		restaurant:[],
    	location:[]
	}

	componentDidMount(){
		this.init(this.props.match.params.param);
	}
	init=(parameter)=>{
		console.log(parameter);
		axios.get("/restaurant/singlerestaurant",{params:{resid:parameter}}).then(res=>res.data).then(data=>{
				this.setState({
					restaurant:data.restaurant
				});

				axios.get("/restaurant/location",{params:{resid:parameter}}).then(res=>res.data).then(data=> { // eslint-disable-line     
	                this.setState({
	                  location:data.location
	                },function(){console.log(this.state);});                  
	              });
			
		});
	}

	

	render(){
		const {restaurant,location} = this.state;
		const {classes}=this.props;
		return(
				<Grid className={classes.topContainer}>

					<Grid xs={12} sm={12} md={12} className={classes.topgrid}>
						<GridContainer>
							<Grid xs={4} sm={4} md={4} className={classes.imggrid} style={{ backgroundImage: "url(" + foodimg + ")" }}>
								
							</Grid>
							<Grid xs={8} sm={8} md={8}>
								
								<div className={classes.restaurantHeader}>
										<h4 className={classes.restaurantTitle}>{restaurant.restaurant_name}</h4>
										<div className={classes.restaurantLocation}>
											{location.address}<br/>
											{restaurant.cuisines && restaurant.cuisines.map((cuis,i)=>
													{	if(i==restaurant.cuisines.length-1)
															return <span key={i}>{cuis}</span>;
														return <span key={i}>{cuis} , </span>;
													}
											)}
										</div>
										<div style={{marginTop:"25px"}}>
											<GridContainer>
												<GridItem xs={4} sm={3} md={2} style={{borderRight: "2px solid #eee"}}>
													<div className={classes.restaurantProperties}>
														<Star style={{position:"relative",margin:"-5px",marginRight:"5px"}}/><span>{restaurant.aggregate_rating}</span>
													</div>	
													<div className={classes.smalldesc}>
														Average Rating
													</div>		
												</GridItem>
												<GridItem xs={4} sm={3} md={2} style={{borderRight: "2px solid #eee"}}>
													<div className={classes.restaurantProperties}><span>31 mins</span>
													</div>	
													<div className={classes.smalldesc}>
														Delivery Time
													</div>		
												</GridItem>
												<GridItem xs={4} sm={3} md={2}>
													<div className={classes.restaurantProperties}><span>R${restaurant.average_costfortwo}</span>
													</div>	
													<div className={classes.smalldesc}>
														Cost For Two
													</div>		
												</GridItem>
											</GridContainer>
										</div>	

								</div>	
								
							</Grid>
						</GridContainer>
						
					</Grid>

					<GridItem xs={12} sm={12} md={12}>
						<GridContainer>
							<GridItem xs={12} sm={6} md={6}>
								
										{(restaurant.has_tablebooking &&(restaurant.has_tablebooking).toLowerCase()=="yes")&&
											<Card style={{backgroundColor:"#55be53"}}>
												<h4 className={classes.cardTitle}>
													TABLE BOOKING AVAILABILITY:{restaurant.has_tablebooking.toUpperCase()}
												</h4>
											</Card> 
										}
										{(restaurant.has_tablebooking &&(restaurant.has_tablebooking).toLowerCase()=="no")&&
											<Card style={{backgroundColor:"#f63e40"}}>
												<h4 className={classes.cardTitle}>
													TABLE BOOKING AVAILABILITY:{restaurant.has_tablebooking.toUpperCase()}
												</h4>
											</Card> 
										}
							</GridItem>
							<GridItem xs={12} sm={6} md={6}>

								{(restaurant.has_online_delivery &&(restaurant.has_online_delivery).toLowerCase()=="yes")&&
											<Card style={{backgroundColor:"#55be53"}}>
												<h4 className={classes.cardTitle}>
													TABLE BOOKING AVAILABILITY:{restaurant.has_online_delivery.toUpperCase()}
												</h4>
											</Card> 
										}
										{(restaurant.has_online_delivery &&(restaurant.has_online_delivery).toLowerCase()=="no")&&
											<Card style={{backgroundColor:"#f63e40"}}>
												<h4 className={classes.cardTitle}>
													TABLE BOOKING AVAILABILITY:{restaurant.has_online_delivery.toUpperCase()}
												</h4>
											</Card> 
										}
								
							</GridItem>
						</GridContainer>

					</GridItem>

				</Grid>

			);
	}
}

ViewRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
		params:PropTypes.shape({
			param:PropTypes.string.isRequired
		}).isRequired
	}),
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    })

};
export default withStyles(viewRestaurantStyle)(ViewRestaurant);
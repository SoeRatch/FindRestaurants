import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";


import restaurantListStyle from "../../../assets/jss/views/restaurantListStyle";

import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import CardIcon from "../../../components/Card/CardIcon";
import CardAvatar from "../../../components/Card/CardAvatar";
import foodimg from "../../../assets/img/food.jpg";


class RestaurantList extends React.Component{
	state={
		restaurant:[]
	}

	componentDidMount(){
		if(this.props.restaurantlist){
			let values=this.props.restaurantlist.map(item=>item.value)
			this.setState({
				restaurant:values
			})
			
		}
		else if(this.props.match){
			this.init(this.props.match.params.param);
			
		}
	}

	componentDidUpdate(prevProps) {
		  if (this.props.restaurantlist && (this.props.restaurantlist !== prevProps.restaurantlist)) {
			    	let values=this.props.restaurantlist.map(item=>item.value)
			  		this.setState({
					    restaurant: values
					  });
			}
		  else if(this.props.match && (this.props.match !== prevProps.match)){
				this.init(this.props.match.params.param);
			}
		}

	

	init=(parameter)=>{
			let param = parameter;

			axios.get("/restaurant/withcuisines",{params:{cuisinevalue:param}}).then(res=>res.data).then(data=> {
                    this.setState({
						restaurant:data.restaurant
					});

          
                });

	}

	render(){
		const { classes,match } = this.props;
		const {restaurant}=this.state;
		const rem = this.state.restaurant;
		return(
	
		<GridContainer>
   				
				{
					 rem && rem.map((restaurant,i)=>{

						return(

										<GridItem xs={12} sm={6} md={4} key={i}>

										<NavLink
								            to={`/restaurant/${restaurant.restaurant_id}`}
								            activeClassName="active"
								            
								          >
								   			<Card>
													<CardHeader color="info" style={{height:"150px"}}>
														<div
											              className={classes.background}
											              style={{ backgroundImage: "url(" + foodimg + ")" }}
											            />
								              		</CardHeader>
								              		<CardBody>
								              			<h4 className={classes.cardTitle}>{restaurant.restaurant_name}</h4>
								              			<p className={classes.cardTitleOrange}>{restaurant.cuisines.toString().replace(/ /g,'-').replace(/,/g,' ')}</p>
								              			<div style={{borderBottom:"1px solid #999",
								              						 width:"40px",
								              						 margin:"50px auto"
								              						}}></div>
								              		</CardBody>
											</Card>
											</NavLink>
										</GridItem>
								

							);


					})
				}
				
		</GridContainer>

	);
	}
}

RestaurantList.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurantlist:PropTypes.array,
  match: PropTypes.shape({
		params:PropTypes.shape({
			param:PropTypes.string.isRequired
		}).isRequired
	}),
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    })

};
export default withStyles(restaurantListStyle)(RestaurantList);
import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import AccessTime from "@material-ui/icons/AccessTime";
import searchStyle from "../../assets/jss/views/searchStyle";
import {restaurant} from "./restaurant_damodata_forquicksearch";
import RestaurantList from '../Restaurant/RestaurantList';

const restaurant_objects = restaurant.map(res=>{
	return {
		name:res.restaurant_name,
		value:res
	}
});

class Search extends React.Component{
	state = {
		filtered:[],
		defaultvalue:"",
		isLoading:false

  	}

/*  fetchWhileSearching = (value) => {

  	axios.get("/restaurant/withrestaurant",{params:{resvalue:value}}).then(res=>res.data).then(data=> {
                    console.log(data);
          
                });
    
  };*/

  handleChange=(e)=>{
  	e.preventDefault();
  	/*let value=e.target.value;

  	this.setState({
      defaultvalue:value,
      isLoading: true,
    });
    setTimeout(() => {
      this.fetchWhileSearching(value);

    }, 2000);*/

    let currentList = restaurant_objects;
    let newList = [];

    if (e.target.value !== "") {

      newList = currentList.filter(item => {
      		let name = item.name;
	        const lc = name.toLowerCase();
	        const filter = e.target.value.toLowerCase();
	        return lc.includes(filter);
      });

    } else {
      newList = [];
    }
    this.setState({
      filtered: newList,
      defaultvalue:e.target.value
    });
  }
  

	render(){
		const {classes} = this.props;
		return(
				<div>
						<input 
							type="text" 
							placeholder="Search Restaurant" 
							value={this.state.defaultvalue}
							onChange={this.handleChange}
							className={classes.search}
						/>
						<RestaurantList restaurantlist={this.state.filtered}/>
				</div>

			);
	}
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(searchStyle)(Search);
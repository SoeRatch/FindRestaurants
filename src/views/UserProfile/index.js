import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import InputLabel from "@material-ui/core/InputLabel";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";
import CardAvatar from "../../components/Card/CardAvatar";

import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";

import avatar from "../../assets/img/faces/myimage.jpg";

const style={
	cardCategoryWhite: {
	    color: "rgba(255,255,255,.62)",
	    margin: "0",
	    fontSize: "14px",
	    marginTop: "0",
	    marginBottom: "0"
  	},
  	cardTitleWhite: {
	    color: "#FFFFFF",
	    marginTop: "0px",
	    minHeight: "auto",
	    fontWeight: "300",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	    marginBottom: "3px",
	    textDecoration: "none"
  	},
  	header:{
  		fontFamily: "inherit",
  		verticalAlign:"top",
  		color: "#222",
  		fontSize:"30px",
  		fontWeight:"600",
  		textAlign:"center",
  		marginBlockStart: "0.67em",
	    marginBlockEnd: "0.67em",
	    marginInlineStart: "0px",
	    marginInlineEnd: "0px"
  	},
  	inputgroup:{
  		 width:"60%",
		 margin:"30px auto"
	  	},
	input:{
		 margin:"0px auto",
         padding:"10px",
         width: '100%',
         height: '50px',
         border: '1px solid #888',
       	 outline:'none'
	}
};

class UserProfile extends React.Component{

	render(){
		const { classes } = this.props;
		return(
			<div>
				<GridContainer>


					<GridItem xs={12} sm={12} md={12}>
          				<div className={classes.header}><h1>Sign In</h1></div>
			        </GridItem>
			        <GridItem xs={12} sm={12} md={12}>
          					<div className={classes.inputgroup}>
          						New member registration will be done at the same time with your first order.
          					</div>
			        </GridItem>
			        <GridItem xs={12} sm={12} md={12}>
			        	<div className={classes.inputgroup}>
				        	<h2 className={classes.labels}>E-mail Address</h2>
	          				<input 
								type="text" 
								placeholder="Please, enter your e-mail address"
								className={classes.input}
								/>
						</div>
			        </GridItem>
			        <GridItem xs={12} sm={12} md={12}>
			        	<div className={classes.inputgroup}>
				        	<h2 className={classes.labels}>Password</h2>
	          				<input 
								type="text" 
								placeholder="Please, enter your Password"
								className={classes.input}
								/>
							<p style={{textDecoration:"underline"}}>Click here if you have forgot your password</p>
							<Button>Sign In</Button>
						</div>
			        </GridItem>


				</GridContainer>
			</div>

			);
	}
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(UserProfile);
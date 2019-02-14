import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import LocalGroceryStore from "@material-ui/icons/LocalGroceryStore";
import Home from "@material-ui/icons/Home";
import topbarStyle from "../../assets/jss/components/topbarStyle";

const Topbar =({...props})=>{

		const { classes, color, logo, image, logoText, routes} = props;

		var brand = (
				    <div className={classes.logo}>
				        <div className={classes.logoImage}>
				          <img src={logo} alt="logo" className={classes.img} />
				        </div>
				        <div style={{float: "right",marginTop:"20px",color:"#993300" }}>
				        {logoText}
				        </div>
				    </div>
				  );

		var links = (
		    <List className={classes.tabs}>
		      {routes.map((prop, key) => {
		        if (prop.redirect || prop.topbarName=="ViewRestaurant") return null;
		        return (
		          <NavLink
		            to={prop.path}
		            activeClassName="active"
		            key={key}
		          >
		            <ListItem button>
		              <ListItemIcon>
		                {typeof prop.icon === "string" ? (
		                  <Icon>{prop.icon}</Icon>
		                ) : (
		                  <prop.icon />
		                )}
		              </ListItemIcon>
		              <ListItemText
		                primary={prop.topbarName}
		                disableTypography={true}
		              />
		            </ListItem>
		          </NavLink>
		        );
		      })}
		      
		    </List>
		  );

		return(
				<Drawer
					anchor="left"
					variant="permanent"
					open
					classes={{
						paper:classes.drawerPaper
					}}
				>
					
					<div className={classes.topbarWrapper}>
						{links}
						<div>
							<List className={classes.tabs}>
								<ListItem button>
						              <ListItemIcon>
						                  <LocalGroceryStore/>
						              </ListItemIcon>
						              <ListItemText
						                primary="Cart"
						                disableTypography={true}
						              />
					            </ListItem>
					        </List>
					    </div>
					</div>

				</Drawer>
		);
}

Topbar.propTypes={
	classes:PropTypes.object.isRequired,

};

export default withStyles(topbarStyle)(Topbar);
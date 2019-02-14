import React from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import homeStyle from '../../assets/jss/layouts/homeStyle';
import Sidebar from "../../components/Sidebar";

import homeRoutes from '../../routes/home';

const switchRoutes = (
	  <Switch>
	    {homeRoutes && homeRoutes.map((prop, key) => {
	      if (prop.redirect)
	        return <Redirect from={prop.path} to={prop.to} key={key} />;
	      return <Route path={`${prop.path}:param`} component={prop.component} key={key} />;
	    })}
	  </Switch>
	);

class HomePage extends React.Component{
	state={
		mobileOpen:false
	}

	handleDrawerToggle=()=>{
		this.setState({
			mobileOpen:!this.state.mobileOpen
		});
	};

	render(){
		const {classes,...rest}=this.props;
		return(
			<div className={classes.wrapper}>
				<Sidebar
					  routes={homeRoutes}
			          logoText={"Cuisines"}
			          handleDrawerToggle={this.handleDrawerToggle}
			          open={this.state.mobileOpen}
			          color="blue"
			          {...rest}
				 />
				 <div className={classes.mainPanel} ref="mainPanel">
				 	  
		              <div className={classes.content}>
		                <div className={classes.container}>{switchRoutes}</div>
		              </div>
        		</div>
			</div>);
	}
}

HomePage.propTypes = {
	classes:PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(homeStyle)(HomePage);
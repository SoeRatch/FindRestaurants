import React from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from '../../assets/jss/layouts/dashboardStyle';
import Topbar from "../../components/Topbar";
import logo from "../../assets/img/JobaaksLogo.png";
import dashboardRoutes from '../../routes/dashboard';
import ViewRestaurant from '../../views/Restaurant/ViewRestaurant';


class Dashboard extends React.Component{
	state={
		mobileOpen:false
	}
	switchRoutes = (
	  <Switch>
	    {dashboardRoutes.map((prop, key) => {
	      if (prop.redirect)
	        return <Redirect from={prop.path} to={prop.to} key={key} />;
	      return <Route location={this.props.location} path={prop.path} component={prop.component} key={key} />;
	    })}
	  </Switch>
	);

	handleDrawerToggle=()=>{
		this.setState({
			mobileOpen:!this.state.mobileOpen
		});
	};

	render(){
		const {classes,...rest}=this.props;
		return(
			<div className={classes.wrapper}>
				<Topbar
					routes={dashboardRoutes}
					logoText={"Eat and Earn"}
					logo={logo}
					{...rest}
				/>
				 <div className={classes.mainPanel} ref="mainPanel">
		              <div className={classes.content}>
		                <div className={classes.container}>{this.switchRoutes}</div>
		              </div>
        		</div>
			</div>
			);
	}
}

Dashboard.propTypes = {
	classes:PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
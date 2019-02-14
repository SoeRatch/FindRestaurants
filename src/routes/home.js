// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import LocalDining from "@material-ui/icons/LocalDining";

// core components/views
import RestaurantList from "../views/Restaurant/RestaurantList";

import {cuisine} from './cuisine_demo_data';
const cuisines = cuisine;
const homeRoutes = cuisines.map(cuisine=>{
                                          return {
                                            path:"/home/",
                                            param:cuisine,
                                            topbarName:cuisine,
                                            sidebarName:cuisine,
                                            icon:LocalDining,
                                            component:RestaurantList
                                          };
                                            
                                          });

homeRoutes.push({ redirect: true, path: "/home", to: `/home/${cuisines[0]}`, navbarName: "Redirect" });



export default homeRoutes;
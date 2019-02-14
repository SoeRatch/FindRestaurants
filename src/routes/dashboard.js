// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";

// core components/views
import SearchPage from "../views/Search";
import UserProfile from "../views/UserProfile";
import HomePage from "../layouts/Home";
import ViewRestaurant from '../views/Restaurant/ViewRestaurant';
const dashboardRoutes = [
  {
    path: "/home",
    topbarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/search",
    topbarName: "Search",
    navbarName: "Dashboard",
    icon: Search,
    component:SearchPage
  },
  {
    path: "/user",
    topbarName: "Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/restaurant/:param",
    topbarName: "ViewRestaurant",
    navbarName: "ViewRestaurant",
    icon: Person,
    component: ViewRestaurant
  },
  
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;

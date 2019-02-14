import { successColor,topdrawerHeight,transition } from "../commons";

const viewRestaurantStyle =theme=>({
  topContainer:{
    [theme.breakpoints.down("sm")]: {
          marginTop: topdrawerHeight/1.5,
          ...transition
        }    
  },
  topgrid:{
    padding:"0px 0px",
    backgroundColor:"#161a29",
    height:"245px",
    [theme.breakpoints.down("sm")]: {
          height:"150px",
          ...transition
        }    
  },
  imggrid:{
    height:"245px",
    padding:"45px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
          height:"150px",
          ...transition
        } 
  },

  restaurantHeader: {
    marginLeft:"50px",
   [theme.breakpoints.down("sm")]: {
          marginLeft:"10px",
          ...transition
        } 
    
  },

  restaurantTitle: {
    color: "#FFFFFF",
    fontWeight: "300",
    fontSize:"32px",
    fontFamily: "'ProximaNova', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
          fontSize:"16px",
          width:"100%",
          ...transition
        } 
    
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "300",
    fontSize:"16px",
    textAlign:"center",
    fontFamily: "'ProximaNova', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
          fontSize:"16px",
          width:"100%",
          ...transition
        } 
    
  },

  restaurantLocation: {
    color: "#FFFFFF",
    opacity:"0.7",
    marginTop:"-20px",
    fontWeight: "300",
    fontSize:"15px",
    fontFamily: "'ProximaNova', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
          fontSize:"7px",
          ...transition
        } 
    
  },

  restaurantProperties: {
    color:"#fff",
    fontWeight: "300",
    fontSize:"15px",
    [theme.breakpoints.down("sm")]: {
          fontSize:"7px",
          ...transition
        } 
  },
  smalldesc: {
    color: "#FFFFFF",
    opacity:"0.7",
    fontWeight: "200",
    marginTop:"5px",
    fontSize:"12px",
    [theme.breakpoints.down("sm")]: {
          fontSize:"6px",
          opacity:"0.9",
          fontWeight: "100",
          marginTop:"2px",
          ...transition
        } 
  },

  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.82)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  
  jobHeader:{
    color: "rgba(0,0,0,.50)",
    margin: "0",
    fontSize: "20px",
    marginTop: "0",
    marginBottom: "0"
      
    },
  jobTitle:{
    color: "rgba(48,120,202,.90)",
    margin: "0",
    fontSize: "15px",
    marginTop: "0",
    marginBottom: "0"
      
    },
    jobDesc:{
    color: "rgba(0,0,0,.70)",
    margin: "0",
    fontSize: "13px",
    marginTop: "0",
    marginBottom: "0"
      
    },
});

export default viewRestaurantStyle;

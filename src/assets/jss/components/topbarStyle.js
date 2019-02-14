import {
  topdrawerHeight,
  drawerWidth,
  boxShadow,
  transition
} from "../commons.js";

const topbarStyle = theme => ({
  drawerPaper: {
    border: "none",
    position: "absolute",
    top: "0",
    right: "0",
    float:"right",
    zIndex: "5000",
    ...boxShadow,
    height: topdrawerHeight,
    overflowX:"hidden",
    overflowY:"hidden",
    [theme.breakpoints.down("sm")]: {
          height: 1.7*topdrawerHeight,

          ...transition
        }    
  },
  topbarWrapper: {
    position: "relative",
    zIndex: "4",
    right: "0",
    display: "flex",
    flexDirection:"row",
    marginTop:"5px",
    flexWrap:"wrap"
  },

  tabs: {
    marginLeft: "2px",
    marginRight: "2px",
    marginTop:"2px",
    listStyle: "none",
    position: "unset",
    display: "flex",
    flexDirection:"row",
    flexWrap:"wrap",
    padding: 0
  },

  logo:{
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      minHeight:"70px",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        height: "2px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(180, 180, 180, 0.3)"
      }
  },
  logoImage:{
      width: "50px",
      display: "inline-block",
      maxHeight: "50px",
      marginLeft: "0px",
      marginRight: "15px"
    },
  img: {
      width: "135px",
      top: "-38px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"

    }
});

export default topbarStyle;

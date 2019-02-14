import {
  drawerWidth,
  transition,
  container,
  topdrawerHeight
} from "../commons.js";

const appStyle = theme =>({
  wrapper:{
    position:"relative",
    top:"0",
    height:`calc(100% - ${topdrawerHeight}px)`
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
        [theme.breakpoints.down("sm")]: {
          marginTop: topdrawerHeight/1.5,
          ...transition
        },
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "7px",
    minHeight: "calc(100vh - 123px)"
  },
  container
});

export default appStyle;

import { successColor } from "../commons";

const dashboardStyle = {
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      opacity: ".8"
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
  cardTitle: {
    color: "#333",
    marginTop: "0px",
    minHeight: "auto",
    lineHeight: "1.1",
    fontSize: "1.5rem",
    fontWeight:"bold",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    marginBottom: "11px",
    textAlign: "center",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleOrange: {
    color: "#ff9100",
    marginTop: "5px",
    minHeight: "auto",
    lineHeight: "1.1",
    fontSize: "1.2rem",
    fontWeight:"bold",
    marginBlockStart: "1.33em",
    marginBlockEnd: "1.33em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    marginBottom: "11px",
    textAlign: "center",
    textTransform:"uppercase",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    },
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
};

export default dashboardStyle;

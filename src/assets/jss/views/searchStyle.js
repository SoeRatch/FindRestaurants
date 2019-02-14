import { transition,topdrawerHeight } from "../commons";

const searchStyle=theme=>({
  search:{
     margin:"0px auto",
     padding:"10px",
     width: '100%',
     height: '50px',
     border: '3px solid #ff9100',
     borderRadius:'5px',
     outline:'none',
     [theme.breakpoints.down("sm")]: {
          marginTop: topdrawerHeight/1.5,
          ...transition
        }   
  }
});

export default searchStyle;

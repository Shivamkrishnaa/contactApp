import {
  container,
  cardTitle,
  blackColor,
  hexToRgb,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const registerPageStyle = {
  ...customCheckboxRadioSwitch,
  cardTitle: {
    ...cardTitle,
    textAlign: "center"
  },
  container: {
    ...container,
    position: "relative",
    zIndex: "3"
    // paddingTop: "23vh"
  },
  rightcontainer:{
      zIndex:"3",
      position:"fixed",
      float:"right",
      width:"50%",
      right:"0",
      top:"0",
      bottom:"0"
      
  },
  gridFullHeight:{
      height:"100%",
  },
  cardSignup: {
    borderRadius: "0px",
    marginBottom: "0",
    padding: "0px 0px",
    marginTop: "0",
    height:"100%"
  },
  logoContainer:{
      textAlign:"center",
      margin:"30px 0"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  form: {
    padding: "0 20px",
    position: "relative"
  },
  socialTitle: {
    fontSize: "18px"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  customFormControlClasses: {
    margin: "0 12px"
  },
  checkboxLabelControl: {
    margin: "0"
  },
  checkboxLabel: {
    fontSize: "0.875rem",
    marginLeft: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)"
  },
  bgimage:{
      backgroundPosition:"center center",
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat"
  },
  pageButton:{marginTop:"30px"},
  pageImageContainer:{
      width:"200px",
      height:"auto",
      margin:"0px auto 30px",
      "& img" : {
          width:"100%",
          height:"auto"
      }
  },
  imageButton:{
      width:"100px",
      height:"100px",
      padding:"5px",
      background:"transparent",
      border:"1px solid #ddd",
      margin:"30px auto 0",
      display:"block",
      "& img":{
          width:"100%",
          opacity:"1"
      },
      "&:hover":{
          background:"transparent",
          opacity:"0.5"
      }
  },
  imageButtonFlag:{
      width:"100px",
      height:"60px",
      padding:"5px",
      background:"transparent",
      margin:"30px auto 0",
      display:"block",
      boxShadow:"none",
      color:"#000",
      "& img":{
          width:"100%",
          opacity:"1",
      },
      "&:hover":{
          background:"transparent",
          opacity:"0.5"
      }
  }
};

export default registerPageStyle;

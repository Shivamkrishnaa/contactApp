import React from "react";
import { Route, Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

const logo = require("assets/img/rect-logo.png");

const useStyles = makeStyles(styles);

export default function RegisterPage() {
    const [checked, setChecked] = React.useState([]);
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = useStyles();
    return (
            <div className={classes.rightcontainer}>
                <GridContainer className={classes.gridFullHeight} justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <Card className={classes.cardSignup}>
            
                        <CardBody>
                            <GridContainer className={classes.gridFullHeight} justify="center" alignItems="center">
                                <GridItem xs={10} sm={10} md={10}>
                                    <div className={classes.logoContainer}>
                                        <img src={logo} />
                                    </div>
            
                                    <form className={classes.form}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <CustomInput
                                                    formControlProps={{
                                                                    fullWidth: true,
                                                                    className: classes.customFormControlClasses
                                                                }}
                                                    inputProps={{
                                                            startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                <Face className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                                                                    ),
                                                            placeholder: "First Name..."
                                                        }}
                                                    />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <CustomInput
                                                    formControlProps={{
                                                            fullWidth: true,
                                                            className: classes.customFormControlClasses
                                                        }}
                                                    inputProps={{
                                                            placeholder: "Last Name..."
                                                        }}
                                                    />
                                            </GridItem>
                                        </GridContainer>
            
                                        <CustomInput
                                            formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                            inputProps={{
                                                    startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                <Phone className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                                                            ),
                                                    placeholder: "Phone..."
                                                }}
                                            />
            
                                            <CustomInput
                                                formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                inputProps={{
                                                        startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                <Email className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                                                                ),
                                                        placeholder: "Email..."
                                                    }}
                                                />
                                                <CustomInput
                                                    formControlProps={{
                                                            fullWidth: true,
                                                            className: classes.customFormControlClasses
                                                        }}
                                                    inputProps={{
                                                            startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                </Icon>
                                </InputAdornment>
                                                                    ),
                                                            placeholder: "Password..."
                                                        }}
                                                    />
                                                    <Button round color="primary" style={{padding: "12px 45px", marginTop:"30px"}} onClick={(e) => {
                                                            e.preventDefault();
                                                            window.location.href = '/authReg/choose-location';
                                                                }}>
                                                        Register
                                                    </Button>
                                                    <span className={classes.right} style={{display:"inline-block", float:"right", marginTop:"30px"}}>
            
                                                        <FormControlLabel className={classes.right}
                                                                          classes={{
                                                                                  root: classes.checkboxLabelControl,
                                                                                  label: classes.checkboxLabel
                                                                              }}
                                                                          control={
                        <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(1)}
                        checkedIcon={
                                    <Check className={classes.checkedIcon} />
      }
      icon={ < Check className = {classes.uncheckedIcon} / > }
      classes={{
                                                              checked: classes.checked,
                                                              root: classes.checkRoot
                                                          }}
      />
      }
      label={
                                    <span>
                                        I agree to the{" "}
                                        <a href="#pablo">terms and conditions</a>.
                                    </span>
      }
      />
  </span>


  </form>

  <div className={classes.center} style={{clear:"both", marginTop:"30px"}}>
      <Button justIcon round color="google">
          <i className="fab fa-google" />
      </Button>
      {` `}
      <Button justIcon round color="facebook">
          <i className="fab fa-facebook-f" />
      </Button>
      {` `}
  </div>
  </GridItem>
  </GridContainer>
  </CardBody>
  </Card>
  </GridItem>
  </GridContainer>
  </div>
                                                            );
                                                }

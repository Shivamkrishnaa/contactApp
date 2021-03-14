import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
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
const googleLogo = require("assets/img/google-logo.png");
const zomatoLogo = require("assets/img/zomato-logo.png");
const fbLogo = require("assets/img/facebook-logo.png");
const tripadvisor = require("assets/img/tripadvisor.png");
const trustpilot = require("assets/img/trustpilot.png");
const yelplogo = require("assets/img/yelplogo.png");

const useStyles = makeStyles(styles);

export default function RegisterPage() {
    const [checked, setChecked] = React.useState([]);
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const handleSimple = event => {
        setSimpleSelect(event.target.value);
    };
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
                                    <h4 className={classes.center}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</h4>
                                    <h4 className={classes.center}>Please choose the preffered sites that matter most for your business </h4>
                                    <form className={classes.form}>
            
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={googleLogo} />
                                                </Button> 
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={zomatoLogo} />
                                                </Button>
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={tripadvisor} />
                                                </Button>
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={trustpilot} />
                                                </Button>
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={yelplogo} />
                                                </Button>
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4}>
                                                <Button className={classes.imageButton}>
                                                    <img src={fbLogo} />
                                                </Button>
                                            </GridItem>
                                        </GridContainer>
            
                                        <div className={classes.center}>
                                            <Button className={classes.pageButton} round color="primary" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = '/authReg/choose-google-location';
                                                        }}>
                                                Next
                                            </Button>
            
                                        </div>
                                    </form>
            
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            );
}

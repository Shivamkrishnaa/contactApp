import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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
import Flag from 'react-world-flags'

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

const logo = require("assets/img/rect-logo.png");
const locationImage = require("assets/img/location_form.png");

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

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
                                    
                                    <div className={classes.pageImageContainer}>
                                        <img src={locationImage} />
                                    </div>
                                    <h2 className={classes.cardTitle}>Hi Dheeraj!</h2>
            
                                    <h4 className={classes.center}>Thanks for signing up with Rectangled,</h4>
                                    <h4 className={classes.center}>Please choose your country of operation</h4>
                                    <form className={classes.form}>
                                    <GridContainer justify="center">
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="IN" height="50" />
                                                    
                                                </Button> 
                                                India
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="LK" height="50" />
                                                </Button>
                                                Sri Lanka
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="SG" height="50" />
                                                </Button>
                                                Singapore
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="AU" height="50" />
                                                </Button>
                                                Australia
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="CA" height="50" />
                                                </Button>
                                                Canada
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={4} className={classes.center}>
                                                <Button className={classes.imageButtonFlag}>
                                                    <Flag code="US" height="50" />
                                                </Button>
                                                United States of America
                                            </GridItem>
                                        </GridContainer>
                                        
                                        <div className={classes.center}>
                                            <Button className={classes.pageButton} round color="primary" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = '/authReg/choose-industry';
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

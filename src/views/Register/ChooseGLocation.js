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

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

const logo = require("assets/img/rect-logo.png");
const locationImage = require("assets/img/location_form.png");

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
                                    
                                    <h4 className={classes.center}>Please choose your Google Location </h4>
                                    <form className={classes.form}>
                                    
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7690417.123181868!2d75.71388840000003!3d19.75147980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1602576998214!5m2!1sen!2sin" width="100%" height="250" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        <div className={classes.center}>
                                            <Button className={classes.pageButton} round color="primary" onClick={(e) => {
                                                                                e.preventDefault();
                                                                                window.location.href = '/dashboard';
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

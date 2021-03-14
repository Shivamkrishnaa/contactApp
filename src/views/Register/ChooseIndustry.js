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
const industryImage = require("assets/img/industryImage.jpg");

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
                                    
                                    <h3 className={classes.cardTitle}>Let us customise your dashboard with relevant insights</h3>
                                    <h4 className={classes.center}>Select the industry your business serves</h4>
                                    <form className={classes.form}>
                                        <FormControl
                                            fullWidth
                                            className={classes.selectFormControl}
                                            >
                                            <InputLabel
                                                htmlFor="simple-select"
                                                className={classes.selectLabel}
                                                >
                                                Choose Industry
                                            </InputLabel>
                                            <Select
                                                MenuProps={{
                                                                className: classes.selectMenu
                                                            }}
                                                classes={{
                                                        select: classes.select
                                                    }}
                                                value={simpleSelect}
                                                onChange={handleSimple}
                                                inputProps={{
                                                        name: "simpleSelect",
                                                        id: "simple-select"
                                                    }}
                                                >
                                                <MenuItem
                                                    disabled
                                                    classes={{
                                                            root: classes.selectMenuItem
                                                        }}
                                                    >
                                                Choose Industry
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                    value="2"
                                                    >
                                                Salon
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                    value="3"
                                                    >
                                                Restaurant
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                    value="4"
                                                    >
                                                Cafe
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <div className={classes.center}>
                                            <Button className={classes.pageButton} round color="primary" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = '/authReg/choose-platforms';
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

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";




import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";

import register from "assets/img/register.jpg";
import location from "assets/img/location-bg.jpg";
import industry from "assets/img/industry_bg.jpg";
import error from "assets/img/clint-mckoy.jpg";
import pricing from "assets/img/bg-pricing.jpeg";

const useStyles = makeStyles(styles);

export default function Pages(props) {
    const {...rest} = props;
    // ref for the wrapper div
    const wrapper = React.createRef();

    // styles
    const classes = useStyles();
    React.useEffect(() => {
        document.body.style.overflow = "unset";
        // Specify how to clean up after this effect:
        return function cleanup() {};
    });
    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/authReg") {
                return (
                        <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                            />
                        );
            } else {
                return null;
            }
        });
    };

    const getBgImage = () => {
        if (window.location.pathname.indexOf("/authReg/register") !== -1) {
            return register;
        } else if (window.location.pathname.indexOf("/authReg/choose-location") !== -1) {
            return location;
        } else if (window.location.pathname.indexOf("/authReg/choose-industry") !== -1) {
            return industry;
        } else if (window.location.pathname.indexOf("/authReg/choose-google-location") !== -1) {
            return pricing;
        } else if (
                window.location.pathname.indexOf("/authReg/choose-platforms") !== -1
                ) {
            return industry;
        } else if (window.location.pathname.indexOf("/auth/error-page") !== -1) {
            return error;
        }
    };
    const getActiveRoute = routes => {
        let activeRoute = "Default Brand Text";
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse) {
                let collapseActiveRoute = getActiveRoute(routes[i].views);
                if (collapseActiveRoute !== activeRoute) {
                    return collapseActiveRoute;
                }
            } else {
                if (
                        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
                        ) {
                    return routes[i].name;
                }
            }
        }
        return activeRoute;
    };
    return (
            <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPageRight}
          style={{ backgroundImage: "url(" + getBgImage() + ")" }}
        >
          <Switch>
            {getRoutes(routes)}
            <Redirect from="/auth" to="/auth/login-page" />
          </Switch>
        </div>
      </div>
            );
}

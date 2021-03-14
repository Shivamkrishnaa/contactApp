import Timeline from "components/Timeline/Timeline.js";
import CardAvatar from "components/Card/CardAvatar.js";
import React , { useEffect, useState }  from 'react';
import Container from '@material-ui/core/Container';
import Tooltip from "@material-ui/core/Tooltip";
import Head from 'next/head'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ChartistGraph from "react-chartist";
import Button from "components/CustomButtons/Button.js";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import GitHubCalendar from 'github-calendar';
import { widgetStories, bugs, website, server } from "variables/general.js";
const useStyles = makeStyles(styles);
export default function Index() {
  useEffect(() => { redirectTo()}, [])
  const classes = useStyles();

  const redirectTo= ()=>{
    const {pathname} = Router
    GitHubCalendar(".calendar", "Shivamkrishnaa", { responsive: true });
  }
  
  return (
    <React.Fragment>
    <Container maxWidth="lg">
    <GridContainer>
    <GridItem xs={12} sm={12} md={4}>
         <h3>About Me</h3>
                <br />
          <Timeline simple stories={widgetStories} />
    </GridItem >
    <GridItem xs={12} sm={12} md={8}>
       <Head>
            <title>Connect</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
            <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"> </script>
          </Head>

          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src='assets/img/new_logo.png' alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Software Developer</h6>
              <h4 className={classes.cardTitle}>Shivam Krishna</h4>
              <p className={classes.description}>
              I enjoy working on software with equally passionate group of people. It really matters to me that I am at a place where I can make an impact in organisation as well as the end user of my software.
              </p>
              {/* <Button color="rose" round>
                Follow
              </Button> */}
              <div className={classes.center} style={{clear:"both", marginTop:"30px"}}>
      <Button justIcon round color="facebook" onClick={ ()=>{window.location = "https://www.linkedin.com/in/shivam-krishna-597407133/"}}>
          <i className="fab fa-linkedin" />
      </Button>
      {` `}
      <Button justIcon round color="github" onClick={ ()=>{window.location = "https://github.com/Shivamkrishnaa"}}>
          <i className="fab fa-github" />
      </Button>
      {` `}
      <Button justIcon round color="">
          <a href="https://leetcode.com/shivamkrishnaa/">
              L</a>
      </Button>
      {` `}
  </div>
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
       

          <h3>Projects</h3>
                <br />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                        <CardHeader image className={classes.cardHeaderHover}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src="assets/img/location-bg.jpg" alt="..." />
                            </a>
                        </CardHeader>
                        <CardBody>
                            <div className={classes.cardHoverUnder}>
                                <Tooltip
                                    id="tooltip-top"
                                    title="View"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    >
                                    <Button color="transparent" simple justIcon
                                    onClick={() => { window.location="/contact" }}
                                    >
                                        <ArtTrack className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                                <Tooltip
                                    disabled  
                                    id="tooltip-top"
                                    title="Edit"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    >
                                    <Button color="success" simple justIcon>
                                        <Refresh className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                                <Tooltip
                                    disabled
                                    id="tooltip-top"
                                    title="Remove"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    >
                                    <Button color="danger" simple justIcon>
                                        <Edit className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                            </div>
                            <h4 className={classes.cardProductTitle}>
                                <a href="/contact" onClick={e => e.preventDefault()}>
                                    Connect+
                                </a>
                            </h4>
                            <p className={classes.cardProductDesciprion}>
                                Send sms and much more.
                            </p>
                        </CardBody>
                        <CardFooter product>
                            <div className={classes.price}>
                                <h4></h4>
                            </div>
                            <div className={`${classes.stats} ${classes.productStats}`}>
                                <Place /> 
                            </div>
                        </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                        <CardHeader image className={classes.cardHeaderHover}>
                            <a href="/contact" /* onClick={e => e.preventDefault()} */>
                                <img src="assets/img/register.jpg" alt="..." />
                            </a>
                        </CardHeader>
                        <CardBody>
                            <div className={classes.cardHoverUnder}>
                                <Tooltip
                                    id="tooltip-top"
                                    title="View"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    >
                                    <Button color="transparent" simple justIcon
                                    onClick={() => { window.location="/movie" }}>
                                        <ArtTrack className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                                <Tooltip
                                    id="tooltip-top"
                                    title="Edit"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    disabled
                                    >
                                    <Button color="success" simple justIcon>
                                        <Refresh className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                                <Tooltip
                                  disabled
                                    id="tooltip-top"
                                    title="Remove"
                                    placement="bottom"
                                    classes={{tooltip: classes.tooltip}}
                                    >
                                    <Button color="danger" simple justIcon>
                                        <Edit className={classes.underChartIcons} />
                                    </Button>
                                </Tooltip>
                            </div>
                            <h4 className={classes.cardProductTitle}>
                                <a href="movie"/*  onClick={e => e.preventDefault()} */>
                                    MoviePlus
                                </a>
                            </h4>
                            <p className={classes.cardProductDesciprion}>
                            Rate & review movies. 
                            </p>
                        </CardBody>
                        <CardFooter product>
                            <div className={classes.price}>
                                <h4></h4>
                            </div>
                            <div className={`${classes.stats} ${classes.productStats}`}>
                                <Place /> 
                            </div>
                        </CardFooter>
                        </Card>
                    </GridItem>
                    
                </GridContainer>
                <div class="calendar">
        </div>
        </GridItem>
    </GridContainer>
    </Container>
    </React.Fragment>

  );
}

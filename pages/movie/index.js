import React, { useEffect, useState } from 'react';
import axios from '../../_axios'
import moment from 'moment';
import _ from 'lodash';
import {Container, Breadcrumbs,Snackbar,InputAdornment ,Button ,Card ,AppBar ,CardContent ,CssBaseline ,Grid ,Toolbar ,Typography ,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  container,
  twitterColor,
  cardTitle
} from "assets/jss/material-dashboard-pro-react.js";
import MuiAlert from '@material-ui/lab/Alert';
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput.js";
import ReactTable from "components/ReactTable/ReactTable.js"
import Router from 'next/router';
import {Dvr, Visibility, Stars, Movie} from "@material-ui/icons";
import GrainIcon from '@material-ui/icons/Contacts';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({ '@global': { ul: { margin: 0, padding: 0, listStyle: 'none', }, }, cardIconTitle: { ...cardTitle, marginTop: "15px", marginBottom: "0px" }, button: { margin: theme.spacing(1), }, appBar: { borderBottom: `1px solid ${theme.palette.divider}`, }, toolbar: { flexWrap: 'wrap', }, toolbarTitle: { flexGrow: 1, }, link: { margin: theme.spacing(1, 1.5), }, heroContent: { padding: theme.spacing(8, 0, 6), }, cardHeader: { backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700], }, cardPricing: { display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: theme.spacing(2), }, footer: { borderTop: `1px solid ${theme.palette.divider}`, marginTop: theme.spacing(8), paddingTop: theme.spacing(3), paddingBottom: theme.spacing(3), [theme.breakpoints.up('sm')]: { paddingTop: theme.spacing(6), paddingBottom: theme.spacing(6), }, }, bullet: { display: 'inline-block', margin: '0 2px', transform: 'scale(0.8)', }, title: { fontSize: 14, }, pos: { marginBottom: 12, }, container: { ...container, zIndex: "4", [theme.breakpoints.down("sm")]: { paddingBottom: "100px" } }, cardTitle: { ...cardTitle, color: twitterColor }, textCenter: { textAlign: "center" }, justifyContentCenter: { justifyContent: "center !important" }, customButtonClass: { "&,&:focus,&:hover": { color: twitterColor }, marginLeft: "5px", marginRight: "5px" }, inputAdornment: { marginRight: "18px" }, inputAdornmentIcon: { color: twitterColor }, cardHidden: { opacity: "0", transform: "translate3d(0, -60px, 0)" }, cardHeader: { marginBottom: "20px" }, socialLine: { padding: "0.9375rem 0" } }));

export default function Pricing(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
    const classes = useStyles();
    useEffect(() => { listItems() }, [])
    const [items, setItems] = useState([]);
    const listItems = (p) => {
      console.trace();
        axios.get('/api/v1/movie/', {})
        .then(r => {
            const respData = r.data.data;
            console.log(respData);
            const output = respData.map((prop, key) => {
              console.log(prop, key);
              return {
                id: key,
                name: prop.name,
                totalAvgRating: prop.totalAvgRating,
                totalRatingCount: prop.totalRatingCount,
                actions: (
                  <div className="actions-right"> <Button justicon="true" round="true" simple="true" onClick={() => { Router.push('/movie/' + prop.id+'/comment'); }} color="secondary" className="edit" > <Dvr /> </Button>{" "} <Button justicon="true" round="true" simple="true" onClick={() => { Router.push('/movie/' + prop.id+'/rating'); }} color="secondary" className="edit" > <Stars /> </Button>{" "} <Button justicon="true" round="true" simple="true" onClick={() => { Router.push('/movie/' + prop.id); }} color="secondary" className="edit" > <Visibility /> </Button>{" "} </div> )
              };
            })
            setData(output);
          })
            .catch(err => {
                console.log(err)
            });
    }
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = useState({ text: "Success", severity: "success" });

    const createMovie = () => {
      axios.post('/api/v1/movie/', {
        name: document.getElementById('moviename').value
      }).then(r => {
        listItems();
          setOpen(true);
          setTimeout(() => {
              setOpen(false);
          }, 2000);
          setMsg({ severity: "success", text: "Movie Created." });
          document.getElementById("moviename").value = "";
        })
        .catch(err => {
          setOpen(true);
          setTimeout(() => {
              setOpen(false);
          }, 2000);
          let errMsg = null;
          if(err && err.response && err.response.data && err.response.data.errors  && err.response.data.errors.length) errMsg = err.response.data.errors.join(); 
          if(err && err.response && err.response.data && err.response.data.errors  && err.response.data.details && err.response.data.details.length ) err.response.data.details[0].message; 
          setMsg({ severity: "error", text: errMsg ? errMsg : "Server Error." })
        });
    }
    const options = items.map((option) => {
        const firstLetter = option.firstName ? option.firstName[0].toUpperCase() : 'U';
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    const [data, setData] = React.useState([]
      );
    return (
        <React.Fragment>
                      <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={3000} >
                    <Alert severity={msg.severity}>
                        {msg.text}
                    </Alert>
                </Snackbar>
            </div>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        MoviePlus
          </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="/movie" className={classes.link}>
                            Movies
            </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Movies 
      </Typography>
    </Breadcrumbs>
            <Container style={{marginTop:30}}  maxWidth="md" component="main" center='true'>
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12} >
                      <Card className={classes.root} variant="outlined">
<CardContent>
  <ReactTable
    columns={[ { Header: "Name", accessor: "name" }, { Header: "Avg Rating", accessor: "totalAvgRating" }, { Header: "Rating Count", accessor: "totalRatingCount" }, { Header: "Actions", accessor: "actions" } ]} data={data} />
</CardContent>
</Card>  </Grid>
<Grid item xs={4}>
<form  onSubmit={(e) => {createMovie(); e.preventDefault();}}>
            <Card className={classes[cardAnimaton]}>
              <CardBody>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create Movie
        </Typography>
              <CustomInput
                  labelText="Movie Name.."
                  id="moviename"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Movie className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="primary" simple="true" size="large" onClick={createMovie} block="true">
                  Let{"'"}s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
</Grid>

                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Copyright />
            </Container>
        </React.Fragment>
    );
}
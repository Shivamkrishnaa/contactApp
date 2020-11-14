import React, { useEffect, useState } from 'react';
import axios from '../../../_axios'
import AppBar from '@material-ui/core/AppBar';
import _ from 'lodash';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import filter from '@mcabreradev/filter';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Router from 'next/router'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';
import Sms from '@material-ui/icons/Sms';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
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

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    button: {
        margin: theme.spacing(1),
      },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
}));

const redirectTo= ()=>{
    if (process.browser) {
        Router.push('/contact/'+window.location.pathname.replace('/contact/','')+'/message');
        // Client-side-only code
      }
  }

export default function Pricing() {
    const classes = useStyles();
    const formatDate = (d) => moment(d).calendar();

    const formatText = (f, l) => `${_.upperFirst(f)} ${_.upperFirst(l)}`

    const formatLetter = (f, l) => `${(f ? _.upperFirst(f[0]) : '+')} ${(l ? _.upperFirst(l[0]) : '')}`
    
    const [otp, setOtp] = useState(0);
    useEffect(() => { getSms() }, [])

    const getSms = (p) => {
        if (process.browser) {
            // Client-side-only code
            axios.get(`/api/v1/user/${window.location.pathname.split('/')[2]}`, {})
                .then(r => {
                    console.log(r.data.data.sms.otp)
                    setOtp(r.data.data.sms.otp, console.log(otp));
                    document.getElementById('outlined-secondary').value =  document.getElementById('outlined-secondary').value + r.data.data.sms.otp
                })
                .catch(err => {
                    console.log(err)
                });
        }
          }
    const bull = <span className={classes.bullet}>•</span>;
    const sendMessage = (p) => {
    const {pathname} = Router;
    console.log(pathname, otp);
    if (process.browser) {
        // Client-side-only code
        axios.post(`/api/v1/user/${window.location.pathname.split('/')[2]}/${window.location.pathname.split('/')[3]}`, {
            message: document.getElementById('outlined-secondary').value.replace(otp,'')
        })
            .then(r => {
                console.log(r.data);
                // setItems(r.data.data)
            })
            .catch(err => {
                console.log(err)
            });
      }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    return (
        <React.Fragment>
             <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Connect+
          </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
                            Contacts
            </Link>
                        <Link variant="button" color="textPrimary" href="/history" className={classes.link}>
                            History
            </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/contact" /* onClick={handleClick}  */className={classes.link}>
        <HomeIcon className={classes.icon} />
        Contacts
      </Link>
      <Link
        color="inherit"
        href={`/contact/${process.browser ? window.location.pathname.split('/')[2]: null}`}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Profile
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Message
      </Typography>
    </Breadcrumbs>

            <Container style={{marginTop:50}} maxWidth="md" component="main" center='true'>
                <Grid container spacing={1} alignItems="center" justify="center">
                    <Grid item xs={8} >
                    <TextField
    defaultValue={`Hi. Your OTP is: `}
    // style={{height: "1000"}}
    id="outlined-secondary"
    label="Outlined secondary"
    variant="outlined"
    color="secondary"
    size='medium'
    autoFocus={true}
    multiline={true}
    fullWidth={true}
    rows={3}
  />
  <Box textAlign='center'>
  <Button
  onClick={()=>sendMessage()}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
</Box>

                  </Grid>

                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Copyright />
            </Container>
        </React.Fragment>
    );
}
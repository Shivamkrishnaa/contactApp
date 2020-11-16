mport React, { useEffect, useState } from 'react';
import axios from '../../_axios'
import AppBar from '@material-ui/core/AppBar';
import _ from 'lodash';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Router from 'next/router'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Contacts';
import GrainIcon from '@material-ui/icons/PermIdentity';

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

const redirectTo= (key)=>{
    Router.push('/contact/'+window.location.pathname.replace('/contact/','')+'/'+key);
  }

export default function Pricing() {
    const classes = useStyles();
    const formatDate = (d) => moment(d).calendar();

    const formatText = (f, l) => `${_.upperFirst(f)} ${_.upperFirst(l)}`

    const formatLetter = (f, l) => `${(f ? _.upperFirst(f[0]) : '+')} ${(l ? _.upperFirst(l[0]) : '')}`

    useEffect(() => { listItems() }, [])
    const [items, setItems] = useState([]);
    const [sms, setSms] = useState([]);
    const bull = <span className={classes.bullet}>•</span>;
    const listItems = (p) => {
    const {pathname} = Router
        axios.get('/api/v1/user/'+window.location.pathname.replace('/contact/',''), {})
            .then(r => {
                setItems(r.data.data.user)
                console.log(r.data.data.sms);
                setSms(r.data.data.sms)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Connect+
          </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Contacts
            </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            History
            </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/contact"  className={classes.link}>
        <HomeIcon className={classes.icon} />
        Contacts
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Profile
      </Typography>
    </Breadcrumbs>
            <Container style={{marginTop:50}} maxWidth="md" component="main" center='true'>
                <Grid container spacing={1} alignItems="center" justify="center">
                    <Grid item xs={8} >
                    <Card className={classes.root} variant="outlined">
      <CardContent>
      <ListItem>
      <ListItemAvatar style={{ maxHeight: 200, overflow: 'auto', padding: 10, 'marginRight': '20px' }}>
        <Avatar>{formatLetter(items.firstName, items.lastName)}</Avatar>
       </ListItemAvatar>
       <ListItemText style={{ maxHeight: 200, overflow: 'auto', padding: 1 }} primary={(!items.firstName && !items.lastName) ? <Skeleton variant="text" width={210}  /> : formatText(items.firstName, items.lastName)} />
      

      </ListItem>
      <Divider />
      <List  aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Contact details
        </ListSubheader>
      }>
      <ListItem >
      <PhoneIcon color="primary"/>
       <ListItemText style={{ maxHeight: 200, overflow: 'auto', padding: 1 }} secondary={(!items.phone) ? <Skeleton variant="text" width={210} /> : items.phone}  />
       
       <Button onClick={()=>redirectTo(sms.key)} variant="contained" size="large" color="primary" className={classes.margin}>
        Send Message
        </Button>
        </ListItem>

      </List>
        
      </CardContent>
    </Card>                    </Grid>

                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Copyright />
            </Container>
        </React.Fragment>
    );
}

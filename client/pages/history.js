import React, { useEffect, useState } from 'react';
import axios from '../_axios'
import AppBar from '@material-ui/core/AppBar';
import _ from 'lodash';
import moment from 'moment';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
import DeleteIcon from '@material-ui/icons/Sms';
import Router from 'next/router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/History';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from "@material-ui/core/CardHeader";
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
}));

const redirectTo= (id)=>{
    Router.push('/contact/'+id);
  }

export default function Pricing() {
    const classes = useStyles();
    const formatDate = (d) => moment(d).calendar();

    const formatText = (f, l) => `${_.upperFirst(f)} ${_.upperFirst(l)}`

    const formatLetter = (f, l) => `${(f ? _.upperFirst(f[0]) : '+')} ${(l ? _.upperFirst(l[0]) : '')}`

    useEffect(() => { listItems() }, [])
    const [items, setItems] = useState([]);
    const [itemsFiltered, setItemsFiltered] = useState([]);

    const listItems = (p) => {
        axios.get('/api/v1/message', {})
            .then(r => {
                setItems(r.data.data)
                setItemsFiltered(r.data.data)
            })
            .catch(err => {
                console.log(err)
            });
    }
    const handleSearch = (user) => {
        if (user) {
            setItemsFiltered(filter(items, user));
        }
        else setItemsFiltered(items)
    }
    const options = items.map((option) => {
        const firstLetter = option.User.firstName ? option.User.firstName[0].toUpperCase() : 'U';
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <React.Fragment>
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
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        History 
      </Typography>
    </Breadcrumbs>
            <Container style={{marginTop:30}}  maxWidth="md" component="main" center='true'>
                <Grid container spacing={1} alignItems="center" justify="center">
                    <Grid item xs={8} >
                        <Autocomplete
                            onChange={(event, value) => handleSearch(value && value.firstLetter ? value.firstLetter : null)}
                            onInputChange={(event, value) => handleSearch(value.firstName)}
                            id="grouped-demo"
                            options={options.sort((a, b) => -b.User.firstName.localeCompare(a.User.firstName))}
                            groupBy={(option) => option.firstLetter.toUpperCase()}
                            getOptionLabel={(option) => option.User.firstName + ' ' + option.User.lastName}
                            style={{ /* width: '100%', */ padding: 10 }}
                            renderInput={(params) => <TextField {...params} label={`Search ${items.length} contacts`} variant="outlined" />}
                        />
                        <Paper style={{ maxHeight: 600, overflow: 'auto', padding: 15 }}>

                            {
                                (itemsFiltered && itemsFiltered.length) ? itemsFiltered.map((r, i) =>
                                    <ListItem style={{ width: '100%', padding: 10 }} autoFocus={i == 0 ? true : false} key={r.id}  >
                                        <ListItemAvatar style={{ maxHeight: 200, overflow: 'auto', padding: 10, 'marginRight': '20px' }}>
                                            <Avatar>{formatLetter(r.User.firstName, r.User.lastName)}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText style={{ maxHeight: 200, overflow: 'auto', padding: 1 }} primary={(!r.User.firstName && !r.User.lastName) ? r.phone : formatText(r.User.firstName, r.User.lastName)} secondary={(!r.User.firstName && !r.User.lastName) ? '' : r.User.phone} />
                                        <ListItemText style={{ maxHeight: 200, overflow: 'auto', padding: 1 }} primary={`SMS: ${ r.body} ${r.otp}`} secondary={formatDate(r.sentAt)} />

                                    </ListItem>
                                ): <React.Fragment>
                                <CardHeader
                                  avatar={
                                    <Skeleton animation="wave" variant="circle" width={40} height={40} />
                                  }
                                  title={
                                    <Skeleton
                                      animation="wave"
                                      height={10}
                                      width="80%"
                                      style={{ marginBottom: 6 }}
                                    />
                                  }
                                  subheader={<Skeleton animation="wave" height={10} width="40%" />}
                                />
                              </React.Fragment>}
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Copyright />
            </Container>
        </React.Fragment>
    );
}
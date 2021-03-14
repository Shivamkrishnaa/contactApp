import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import axios from '../../../_axios'
import AppBar from '@material-ui/core/AppBar';
import _ from 'lodash';
import moment from 'moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Router from 'next/router'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Contacts';
import WhatshotIcon from '@material-ui/icons/PermIdentity';
import GrainIcon from '@material-ui/icons/MailOutline';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useRouter } from 'next/router'
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';


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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

const redirectTo = () => {
    if (process.browser) {
        Router.push('/contact/' + window.location.pathname.replace('/contact/', '') + '/message');
        // Client-side-only code
    }
}

export default function Pricing() {
    const router = useRouter()
    const classes = useStyles();

    const [otp, setOtp] = useState(0);
    const [valid, setValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('');
    const [rating, setRating] = useState(0);
    const [helperText, setHelperText] = useState('');
    const [user, setUser] = useState("");
    const [prev, setPrev] = useState("");
    const [msg, setMsg] = useState({ text: "Success", severity: "success" });
    const [open, setOpen] = React.useState(false);

    const [limit, setLimit] = useState("127 Characters left");
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    function checkLimit(event) {
        if (event.target.value) {
            setDisabled(event.target.value.length <= 150 ? false : true);
            (event.target.value.length > 150) ? (event.target.value = prev) : setPrev(event.target.value)
            setLimit(`${150 - event.target.value.length} Characters left`);
            setError(event.target.value.indexOf(otp) == -1 ? true : false);
            setValid((event.target.value.indexOf(otp) == "-1") ? false : true)
            setHelperText(event.target.value.indexOf(otp) == "-1" ? `One Time Password (OTP) ${otp} is required` : '')
            var  count = (event.target.value.match(new RegExp(otp, "gi")) || []).length;
            setHelperText(count > 1 ? `Multiple occourences of One Time Password (OTP) ${otp} ` : '')

        }
        else setError(true);
    }
    useEffect(() => { getSms() }, [])
    const handleRatingChange = (event) => {
        setRating(+event.target.value);
    }
    const getSms = (p) => {
        if (process.browser) {
            setUser(window.location.pathname.split('/')[2])
           setKey( window.location.pathname.split('/').reverse()[0]);
        }
    }
    const bull = <span className={classes.bullet}>•</span>;
    const sendMessage = (p) => {
        if (process.browser) {
            setLoading(true);
            const body = { };
            let config = { headers: { } };
            if(key === 'comment' ) body[key] = document.getElementById('outlined-secondary').value ;
            else {
                body[key] =rating;
                body['email'] =document.getElementById('standard-error-helper-text').value ;
            }
            axios.post(`/api/v1/movie/${key}/${window.location.pathname.split('/')[2]}`, body, config).then(r => {
                    setMsg({ severity: "success", text: (key ==='comment' )? "Comment Added.": 'Movie Rated.' })
                    setOpen(true);
                    setValid(false);
                    setLoading(false);
                    setTimeout(() => {
                        setOpen(false);
                        Router.push(`/movie/${window.location.pathname.split('/')[2]}`);
                    }, 2000)
                })
                .catch(err => {
                    let errMsg = null;
                    if(err && err.response && err.response.data && err.response.data.errors  && err.response.data.errors.length) errMsg = err.response.data.errors.join(); 
                    if(err && err.response && err.response.data && err.response.data.errors  && err.response.data.details && err.response.data.details.length ) err.response.data.details[0].message; 
                    setMsg({ severity: "error", text: errMsg ? errMsg : "Server Error." })
                    setOpen(true);
                    setLoading(false);
                    setTimeout(() => {
                        setOpen(false);
                    }, 2000)
                });
        }
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={3000} >
                    <Alert severity={msg.severity}>
                        {msg.text}
                    </Alert>
                </Snackbar>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        MoviePlus
          </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
                            Movies
            </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/movie" /* onClick={handleClick}  */ className={classes.link}>
                    <HomeIcon className={classes.icon} />
        Movies
      </Link>
                <Link
                    color="inherit"
                    href={`/movie/${user}`}
                    className={classes.link}
                >
                    <WhatshotIcon className={classes.icon} />
        Movie
      </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    {key ==='comment' ? 'Comment' : 'Rating'}
      </Typography>
            </Breadcrumbs>

            <Container style={{ marginTop: 50 }} maxWidth="md" component="main" center='true'>
                <Grid container spacing={1} alignItems="center" justify="center">
                    <Grid item xs={8} >
                        <Typography spacing={1}>{key ==='comment' ? 'Comment This Movie.' : 'Rate This Movie.'}</Typography>
                        <br />
                        {!key.length ? <React.Fragment><Skeleton variant="rect" animation="wave" width={600} height={100} /></React.Fragment>
                        :( key ==='comment' ? <TextField
                                    // defaultValue={``}
                                    // style={{height: "1000"}}
                                    id="outlined-secondary"
                                    label={limit}
                                    onChange={(e) => checkLimit(e)}
                                    variant="outlined"
                                    color="secondary"
                                    size='medium'
                                    autoFocus={true}
                                    multiline={true}
                                    fullWidth={true}
                                    rows={3}
                                    error={error}
                                    helperText={helperText}
                                />: (
                                <Box component="fieldset" >
                                    <Typography  style={{ marginTop: 50 }} component="legend">Ratings</Typography>
                                    <Grid container >
                                <Grid item xs={6}>
                                <TextField
      id="standard-error-helper-text"
      label="Email #"
      defaultValue=""
      helperText="Unique Email number."
    /></Grid>
      <Grid item xs={6}>
                            <Rating 
                            style={{ marginTop: 20 }} 
                            classes={{
                                iconActive:'MuiRating-iconHover',
                                iconHover: 'MuiRating-iconActive'// class name, e.g. `classes-nesting-label-x`
                              }}
                              name="customized-10" defaultValue={0} max={10} size="large" onChange={handleRatingChange} />

      </Grid>
                              
                          </Grid>
                                    </Box>))}
                        <Box textAlign='center'>
                            <div className={classes.wrapper}>
                                <Button
                                disabled={open}
                                    // disabled={otp && valid && !loading ? false : true}
                                    onClick={() => sendMessage()}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Submit
      </Button>
                                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            </div>

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
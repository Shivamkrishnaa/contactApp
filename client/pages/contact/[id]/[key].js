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
import Head from 'next/head'

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

    const getSms = (p) => {
        if (process.browser) {
            setUser(window.location.pathname.split('/')[2])
            axios.get(`/api/v1/user/${window.location.pathname.split('/')[2]}`, {})
                .then(r => {
                    setKey(r.data.data.sms.key)
                    setMsg({ severity: "success", text: "Your One Time Password (OTP) Generated!" })
                    setOtp(r.data.data.sms.otp);
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 2000)
                    document.getElementById('outlined-secondary').value = document.getElementById('outlined-secondary').value + r.data.data.sms.otp
                    setPrev(document.getElementById('outlined-secondary').value)
                })
                .catch(err => {
                    setMsg({ severity: "error", text: "Server Error." })
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 2000)
                });
        }
    }
    const bull = <span className={classes.bullet}>•</span>;
    const sendMessage = (p) => {
        if (process.browser) {
            setLoading(true);
            axios.post(`/api/v1/user/${user}/${key}`, {
                message: document.getElementById('outlined-secondary').value.replace(otp, '')
            }).then(r => {
                    setMsg({ severity: "success", text: "Message Queued." })
                    setOpen(true);
                    setValid(false);
                    setLoading(false);
                    setTimeout(() => {
                        setOpen(false);
                        Router.push("/history");
                    }, 2000)
                })
                .catch(err => {
                    setMsg({ severity: "error", text: "Server Error." })
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 2000)
                });
        }
    }

    return (
        <React.Fragment>
        <Head>
            <title>Connect</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          </Head>
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
                <Link color="inherit" href="/contact" /* onClick={handleClick}  */ className={classes.link}>
                    <HomeIcon className={classes.icon} />
        Contacts
      </Link>
                <Link
                    color="inherit"
                    href={`/contact/${user}`}
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

            <Container style={{ marginTop: 50 }} maxWidth="md" component="main" center='true'>
                <Grid container spacing={1} alignItems="center" justify="center">
                    <Grid item xs={8} >
                        <Typography spacing={1}>Write your message here</Typography>
                        <br />
                        {
                            otp ?
                                <TextField
                                    defaultValue={`Hi. Your OTP is: `}
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
                                    disabled={disabled}
                                    error={error}
                                    helperText={helperText}
                                />

                                : <React.Fragment><Skeleton variant="rect" animation="wave" width={600} height={100} /></React.Fragment>
                        }
                        <Box textAlign='center'>
                            <div className={classes.wrapper}>
                                <Button
                                    disabled={otp && valid && !loading ? false : true}
                                    onClick={() => sendMessage()}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Send
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

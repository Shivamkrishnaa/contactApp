import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Assignment from "@material-ui/icons/Assignment";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
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

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  {
    id: 'text',
    label: 'Comment',
    minWidth: 170,
    align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
  }
];
const ratingColumns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'email', label: 'By User', minWidth: 100 },
  {
    id: 'rating',
    label: 'Rating',
    minWidth: 170,
    align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
  }
];

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
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
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

const redirectTo = (key) => {
  Router.push('/movie/' + window.location.pathname.replace('/movie/', '') + '/' + key);
}

export default function Pricing() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [reviewPage, setReviewPage] = React.useState(0);

  const [rows, setRows] = React.useState([]);
  const [reviewRows, setReviewRows] = React.useState([]);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [reviewRowsPerPage, setReviewRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleReviewChangePage = (event, newPage) => {
    setReviewPage(newPage);
  };

  useEffect(() => {
    listItems()
  }, [rowsPerPage, page]);
  useEffect(() => {
    listRatings()
  }, [reviewRowsPerPage, reviewPage]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleReviewChangeRowsPerPage = (event) => {
    setReviewRowsPerPage(+event.target.value);
    setReviewPage(0);
  };

  const [count, setCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  
  const listItems = (p) => {
    const { pathname } = Router
    axios.get('/api/v1/movie/comment/' + window.location.pathname.replace('/movie/', ''), {
      params: {
        limit: rowsPerPage,
        page: page + 1
      }
    })
      .then(r => {
        setRows(r.data.data);
        setCount(r.data.count)
      })
      .catch(err => {
        console.log(err)
      });
  }
  const listRatings = (p) => {
    const { pathname } = Router
    axios.get('/api/v1/movie/rating/' + window.location.pathname.replace('/movie/', ''), {
      params: {
        limit: reviewRowsPerPage,
        page: reviewPage + 1
      }
    })
      .then(r => {
        setReviewRows(r.data.data);
        setReviewCount(r.data.count)
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
        <Link color="inherit" href="/movie" className={classes.link}>
          <HomeIcon className={classes.icon} />
        Movies
      </Link>
        <Typography color="textPrimary" className={classes.link}>
          <GrainIcon className={classes.icon} />
        Comment & Rating
      </Typography>
      </Breadcrumbs>
      <Container style={{ marginTop: 50 }} maxWidth="md" component="main" center='true'>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} >
            <Card className={classes.root} variant="outlined">
            <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Comments</h4>
          </CardHeader>
              <CardContent>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => 
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
          <Card className={classes.root} variant="outlined">
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Ratings</h4>
          </CardHeader>
              <CardContent>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {ratingColumns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reviewRows.map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {ratingColumns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={reviewCount}
                  rowsPerPage={reviewRowsPerPage}
                  page={reviewPage}
                  onChangePage={handleReviewChangePage}
                  onChangeRowsPerPage={handleReviewChangeRowsPerPage}
                />
              </CardContent>
            </Card>  
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
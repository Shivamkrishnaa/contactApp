import React , { useEffect, useState }  from 'react';
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import Router from 'next/router'
import { Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
export default function Index() {
  useEffect(() => { redirectTo()}, [])
  const classes = useStyles();

  const redirectTo= ()=>{
    const {pathname} = Router
    if(pathname == '/' ){
      setTimeout(()=>{

        Router.push('/contact')
      },500)
    }
  }
  return (
    <Container maxWidth="sm">
       <Head>
            <title>Connect</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          </Head>
          <Backdrop className={classes.backdrop} open={true} >
  <CircularProgress color="inherit" />
</Backdrop>
    </Container>
  );
}

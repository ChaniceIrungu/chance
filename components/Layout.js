/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/styles";
import moment from "moment";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Chance</title>
        <meta name="description" content="Where Startups meet investors" />
        <link rel="icon" href="./chance.png" />
      </Head>
      <div className={classes.body}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img src="./chance.png" alt="logo" className={classes.logo} />
            <Typography>CHANCE</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>© Copyright {moment().year()} Chance.</Typography>
        </footer>
      </div>
    </div>
  );
}

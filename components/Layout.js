/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import styles from "../styles/Layout.module.css";
import moment from "moment";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Chance</title>
        <meta name="description" content="Where Startups meet investors" />
        <link rel="icon" href="./chance.png" />
      </Head>
      <div className={styles.body}>
        <AppBar position="static" style={{ background: "#0f0f28" }}>
          <Toolbar>
            <img src="./chance.png" alt="logo" className={styles.logo} />
            <Typography>CHANCE</Typography>
          </Toolbar>
        </AppBar>
        <Container className={styles.main}>{children}</Container>
        <footer className={styles.footer}>
          <Typography>© Copyright {moment().year()} Chance.</Typography>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Hidden } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useBasicFollowStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    // marginRight: 12,
  },
  avatar: {
    backgroundColor: "#C4C4C4",
  },
  overline: {
    fontSize: 15,
    textTransform: "none",

    fontWeight: 500,
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: "#0092D4",
  },
});

const BasicFollow = () => {
  const styles = useBasicFollowStyles();
  return (
    <Grid container spacing={2} direction="row" className={styles.root}>
      <Grid item xs={4}>
        <Avatar className={styles.avatar}></Avatar>
      </Grid>
      <Grid item xs={4}>
        <Typography className={styles.overline} style={{ display: "inline" }}>
          User Name
        </Typography>
        <Typography className={styles.name}>@userName</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          href="/signUp"
          style={{
            textTransform: "none",
            backgroundColor: "#0092D4",
            color: "#ffff",
          }}>
          Follow
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    backgroundColor: "#21214B",
    color: "#ffff",
  },
  header: {
    fontFamily: "Barlow, san-serif",
    backgroundColor: "#fff",
  },
  headline: {
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
}));

export default function BasicFollowCard() {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#fffff" gutterBottom>
          People You May Know
        </Typography>
        <BasicFollow></BasicFollow>
      </CardContent>
    </Card>
  );
}

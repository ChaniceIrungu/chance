import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Hidden, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

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

  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
});

const BasicFollow = () => {
  const styles = useBasicFollowStyles();
  return (
    <CardActions className={styles.cardActions}>
      <Box className={styles.author}>
        <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            User Name
          </Typography>
          <Typography variant="subtitle2" className={styles.name} component="p">
            @userName
          </Typography>
        </Box>
      </Box>
      <Box>
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
      </Box>
    </CardActions>

    // <Grid container spacing={2} direction="row" className={styles.root}>
    //   <Grid item xs={4}>
    //     <Avatar className={styles.avatar}></Avatar>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <Typography className={styles.overline} style={{ display: "inline" }}>
    //       User Name
    //     </Typography>
    //     <Typography className={styles.name}>@userName</Typography>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <Button
    //       variant="contained"
    //       href="/signUp"
    //       style={{
    //         textTransform: "none",
    //         backgroundColor: "#0092D4",
    //         color: "#ffff",
    //       }}>
    //       Follow
    //     </Button>
    //   </Grid>
    // </Grid>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "100%",
    borderRadius: 16,
    boxShadow: "4 8px 10px 0 #BDC9D7",
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
    <Card className={styles.card} mb={4}>
      <CardContent>
        <Typography style={{ fontSize: 14 }} color="#fffff" gutterBottom>
          People You May Know
        </Typography>
        <BasicFollow></BasicFollow>
        <BasicFollow></BasicFollow>
        <BasicFollow></BasicFollow>
        <BasicFollow></BasicFollow>
      </CardContent>
    </Card>
  );
}

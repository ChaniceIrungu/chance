import React from "react";
import Card from "../components/Post";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasicFollowCard from "../components/FollowCard";
import RecentBlog from "../components/recentBlog";
import FeedLeftUserCard from "../components/feedLeftUserCard";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
});

export default function Feed() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      className={classes.gridContainer}
      justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <FeedLeftUserCard style={{ paddingBottom: 2 }} />
        <RecentBlog />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        display="flex"
        justifyContent="space-between">
        <BasicFollowCard></BasicFollowCard>
      </Grid>
    </Grid>
  );
}

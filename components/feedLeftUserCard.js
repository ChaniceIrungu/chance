import React from "react";
import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

export default function FeedLeftUserCard() {
  const classes = useStyles;

  return (
    <Card style={{ backgroundColor: "#21214B", color: "#ffff" }}>
      <CardMedia
        component="img"
        className={classes.media}
        image="/userProfile.png"
        alt="Paella dish"
      />
    </Card>
  );
}

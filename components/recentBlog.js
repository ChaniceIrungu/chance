import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import { Button, Grid } from "@material-ui/core";

const OneBlogCard = () => {
  const theme = useTheme();
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(expand);
  };

  const text = " Lorem ipsum dolor sit amet, consectetur";

  return (
    <Card
      style={{ backgroundColor: "#21214B", color: "#ffffff", display: "flex" }}>
      <CardMedia
        component="img"
        style={{ width: 150 }}
        src={"https://i.pravatar.cc/300?img=10"}
        alt="Live from space album cover"
      />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <CardContent style={{ flex: "1 0 auto" }}>
          <Typography component="div" style={{ fontSize: 14 }}>
            Post Title Here
          </Typography>
          <Typography style={{ fontSize: 10, color: "#ffffff" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica{" "}
          </Typography>
          <ShowMoreText
            lines={3}
            more="Read more"
            less="Show less"
            onClick={onClick}
            expanded={expand}
            width={20}
            style={{
              fontSize: 9,
              color: "#0092D4",
              textTransform: "none",
            }}>
            {text}
          </ShowMoreText>
        </CardContent>
      </Box>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#21214B",
    color: "#ffff",
  },
}));
export default function RecentBlog() {
  const blogStyles = useStyles();
  return (
    <Card className={blogStyles.card}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="#fffff" gutterBottom>
          Recent Blog Posts
        </Typography>
        <OneBlogCard></OneBlogCard>
      </CardContent>
    </Card>
  );
}

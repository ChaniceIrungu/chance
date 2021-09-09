/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { Button, Grid, Hidden } from "@material-ui/core";
import useStyles from "../utils/styles";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container direction="row">
        <Grid item sm={4} md={6} className={classes.textSection}>
          <Hidden xsDown>
            <h1 className={classes.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </Hidden>

          <p className={classes.paragraph}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget lectus a tortor mattis condimentum. Vivamus vulputate, quam et
            semper laoreet, enim magna tempus dui, et consectetur nisl metus sed
            felis. Proin lacus eros, aliquet in vulputate nec, rhoncus eget
            ligula. Vivamus vitae commodo augue, id vestibulum felis. Duis nec
            vestibulum augue
          </p>

          <Button variant="outlined" href="/" className={classes.textColor}>
            Login
          </Button>
          <Button variant="contained" color="primary" href="/">
            Sign Up
          </Button>
        </Grid>

        <Grid item sm={12} md={6} className={classes.deviceMockupContainer}>
          <img src="/chanceHomeImage.png" className={classes.devicesMockups} />
        </Grid>
      </Grid>
    </Layout>
  );
}

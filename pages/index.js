/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button, Grid, Box } from "@material-ui/core";
import useStyles from "../utils/styles";
import { spacing } from "@material-ui/system";

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justifyContent="space-evenly">
        <Grid item sm={6} xs={12}>
          <h1 className={classes.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <p className={classes.paragraph}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget lectus a tortor mattis condimentum. Vivamus vulputate, quam et
            semper laoreet, enim magna tempus dui, et consectetur nisl metus sed
            felis. Proin lacus eros, aliquet in vulputate nec, rhoncus eget
            ligula. Vivamus vitae commodo augue, id vestibulum felis. Duis nec
            vestibulum augue
          </p>
          <Box
            display="flex"
            component="span"
            justifyContent="space-around"
            mt={4}>
            <Button
              variant="outlined"
              href="/logIn"
              className={classes.button}
              style={{ textTransform: "none" }}
              label="outlined">
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/signUp"
              style={{ textTransform: "none" }}>
              Sign Up
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          sm={6}
          xs={12}
          md={6}
          className={classes.deviceMockupContainer}>
          <img
            src="/chanceHomeImage.png"
            alt="home page Image"
            className={classes.devicesMockups}
          />
        </Grid>
      </Grid>
    </>
  );
}

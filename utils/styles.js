import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  body: {
    backgroundColor: "#0F0F28",
    color: "#ffffff",
  },
  navbar: {
    backgroundColor: "#0F0F28",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },

  logo: {
    maxWidth: 40,
    marginRight: 10,
  },
  textSection: {
    paddingLeft: 0,
    paddingTop: 80,
  },
  title: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: "3.4rem",
    margin: 0,
  },
  paragraph: {
    color: "#ffffff",
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: "1.43rem",
  },
  deviceMockupContainer: {
    position: "relative",
    paddingBottom: "33%",
    height: 0,
    overflow: "hidden",
  },
  devicesMockups: {
    position: "absolute",
    top: 4,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  textColor: {
    color: "#ffffff",
  },
});

export default useStyles;

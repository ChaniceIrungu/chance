import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#ffffff",
    backgroundColor: "#21214B",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "#ffffff",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;

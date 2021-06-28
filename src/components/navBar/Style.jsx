import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      color: "black",
      backgroundColor: "white",
      paddingRight: "1%",
      paddingLeft: "2%",
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      marginRight: "5px",
      marginLeft: "5px",
    },
    Btn: {
      textTransform: "none",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "white",
        textDecoration: "underline",
      },
    },
    link: {
      textDecoration: "none",
    },
    out: {
      flexGrow: 1,
      textDecoration: "none",
      textTransform: "none",
      justifyContent: "flex-end",
      "&:hover": {
        backgroundColor: "white",
        textDecoration: "underline",
      },
    },
  })
);

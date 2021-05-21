import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageTitle: {
      fontFamily: "Ariel, Verdana",
      textAlign: "center",
    },
    firstSection: {
      backgroundColor: "#f0f8ff",
    },
    firstSectionTitle: {
      fontFamily: "Ariel, Verdana",
      fontWeight: "bold",
      margin: "10px",
    },
    root: {
      minWidth: 275,
      marginBottom: "10px",
      boxShadow: "2px 2px 4px #000000;",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

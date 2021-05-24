import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageTitle: {
      fontFamily: "Poppins, Ariel, Verdana",
      marginBottom: "0px",
      marginTop: "10px",
    },
    firstSection: {
      backgroundColor: "#f0f8ff",
      height: "500px",
    },
    firstSectionTitle: {
      fontFamily: "Poppins, Ariel, Verdana",
      fontWeight: "bold",
      width: "50%",
    },
    firstSectionTitleCenetr: {
      margin: "auto",
      width: "50%",
      marginTop: "20%",
    },
    firstSectionOption: {
      fontFamily: "Poppins, Ariel, Verdana",
      width: "50%",
    },
    firstSectionOptionCenter: {
      marginTop: "10%",
    },
    root: {
      minWidth: 275,
      marginBottom: "10px",
      boxShadow: "2px 2px 4px #000000;",
      "&:hover": {
        transform: "scale(1.05)",
      },
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

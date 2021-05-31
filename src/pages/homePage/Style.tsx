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
    },
    firstSectionTitle: {
      fontFamily: "Poppins, Ariel, Verdana",
      fontWeight: "bold",
      minWidth: "50%",
    },
    firstSectionTitleCenetr: {
      margin: "auto",
      width: "50%",
      marginTop: "20%",
    },
    firstSectionOption: {
      fontFamily: "Poppins, Ariel, Verdana",
    },
    firstSectionOptionCenter: {
      marginTop: "10%",
    },
    logo: {
      height: "100%",
      width: "100%",
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
    description: {
      textTransform: "none",
    },
  })
);

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    page: {
      "@media (min-width: 720px)": {
        width: "80%",
      },
      "@media (max-width: 720px)": {
        width: "100%",
      },
      borderRadius: "15px",
      backgroundColor: "#f0f8ff",
    },
    title: {
      marginBottom: "10px",
      marginTop: "10px",
    },
    titleText: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      color: "rgb(68 108 149 / 77%)",
      fontWeight: "bold",
    },
    body: {
      marginLeft: "2%",
      marginRight: "2%",
    },
    item: {
      textAlign: "center",
    },
    cardItem: {
      width: "100%",
    },
    collapse: {
      width: "100%",
    },
  })
);

export default useStyles;

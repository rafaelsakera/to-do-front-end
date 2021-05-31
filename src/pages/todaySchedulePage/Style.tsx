import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
    page: {
      backgroundColor: "#f0f8ff",
      borderRadius: "15px",
      "@media (min-width: 720px)": {
        width: "80%",
      },
      "@media (max-width: 720px)": {
        width: "100%",
      },
    },
    calender: {
      "@media (min-width: 720px)": {
        width: "80%",
      },
      "@media (max-width: 720px)": {
        width: "100%",
      },
    },
    dateTitle: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      color: "rgb(68 108 149 / 77%)",
      fontWeight: "bold",
    },
    paper: {
      boxShadow: "2px 2px 4px #000000;",
      height: "75vh",
    },
  })
);

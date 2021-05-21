import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontFamily: "Ariel, Verdana",
    },
    firstSection: {
      backgroundColor: "#f0f8ff",
    },
    firstSectionTitle: {
      fontFamily: "Ariel, Verdana",
      fontWeight: "bold"
    },
  })
);

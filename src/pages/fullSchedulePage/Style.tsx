import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles((theme) => ({
  todayCell: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.14),
    },
    "&:focus": {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.07),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.14),
    },
    "&:focus": {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
  },
  today: {
    backgroundColor: fade(theme.palette.primary.main, 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
  },
  dateTitle: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
}));

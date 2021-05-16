import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    newTaskInput: {
      marginBottom: "10px",
    },
    input: {
      width: "100%",
    },
  })
);

export default useStyles;

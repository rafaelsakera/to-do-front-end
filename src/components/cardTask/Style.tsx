import { makeStyles } from "@material-ui/core/styles";

export const baseCardStyle = makeStyles({
  root: {
    margin: "5px",
    height: 150,
  },
  overTime: {
    margin: "5px",
    height: 150,
    backgroundColor: "#ff000045",
  },
  done: {
    margin: "5px",
    height: 150,
    backgroundColor: "#00800059",
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
  line: {
    height: "100%",
    borderLeft: "2px solid #a7a2a2",
  },
  firstSection: {
    width: "20%",
  },
  secondSection: {
    width: "50%",
  },
  thirdSection: {
    width: "20%",
  },
});

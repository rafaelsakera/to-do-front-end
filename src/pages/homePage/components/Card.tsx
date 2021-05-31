import React from "react";

import { useStyles } from "../Style";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const PageCard: React.FC<{
  title: string;
  description: any;
  onClick: Function;
}> = ({ title, description, onClick }) => {
  const classes = useStyles();

  return (
    <Button onClick={() => onClick()}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <br />
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <br />
          <Typography variant="body2" component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};

export default PageCard;

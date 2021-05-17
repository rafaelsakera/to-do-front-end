import React from "react";

import Typography from "@material-ui/core/Typography";

interface Props {
  titleStyle: string;
  startDate: string;
  endDate: string;
  title: string;
}

const FirstSection: React.FC<Props> = ({
  titleStyle,
  startDate,
  endDate,
  title,
}) => {
  const parseDate = (date: string): string => {
    const parseDate = date.split("T")[0];
    const parseTime = date.split("T")[1].slice(0, -5);
    return parseDate + " " + parseTime;
  };

  return (
    <div>
      <Typography className={titleStyle} color="textSecondary" gutterBottom>
        Start: {parseDate(startDate)}
      </Typography>
      <Typography className={titleStyle} color="textSecondary" gutterBottom>
        End: {parseDate(endDate)}
      </Typography>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};

export default FirstSection;

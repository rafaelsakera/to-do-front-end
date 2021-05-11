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
    let d: Date = new Date(date);
    let year: number = d.getFullYear();
    let month: string = "" + (d.getMonth() + 1);
    let day: string = "" + d.getDate();
    let hour: number = d.getHours();
    let minute: number | string = d.getMinutes();

    if (month.length < 2) month = "0" + month;
    if (minute < 10) minute = "0" + minute;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-") + " " + hour + ":" + minute;
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

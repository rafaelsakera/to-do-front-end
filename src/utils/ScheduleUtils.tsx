import { CardData } from "../interfaces/CardData";

export const minTime = (tasks: CardData[]): number => {
  if (tasks.length === 0) {
    return 9;
  } else {
    let min: number = 10;
    tasks.map((t: CardData) => {
      let time: number = parseInt(t.startDate.split("T")[1].split(":")[0]);
      if (time < min) {
        min = time;
      }
      return t;
    });
    return min - 1;
  }
};

export const maxTime = (tasks: CardData[]): number => {
  if (tasks.length === 0) {
    return 18;
  } else {
    let max: number = 18;
    tasks.map((t: CardData) => {
      let time: number = parseInt(t.endDate.split("T")[1].split(":")[0]);
      if (time > max) {
        max = time;
      }
      return t;
    });
    return max + 1;
  }
};

export const parseTasks = (tasks: Array<CardData>) => {
  return tasks.map((t) => {
    return {
      startDate: t.startDate.slice(0, -8),
      endDate: t.endDate.slice(0, -8),
      title: t.title,
    };
  });
};

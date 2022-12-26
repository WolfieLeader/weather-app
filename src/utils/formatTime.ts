import moment from "moment";

export const formatHour = (time: number) => {
  return moment.unix(time).format("h:mm A");
};

export const formatDay = (time: number) => {
  return moment.unix(time).format("dddd");
};

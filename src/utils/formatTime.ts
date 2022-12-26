import moment from "moment";

const formatTime = (time: number) => {
  return moment.unix(time).format("h:mm A");
};

export default formatTime;

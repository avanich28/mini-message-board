import { format } from "date-fns";

export const formatDate = function (date) {
  return format(date, "dd MMM yyyy");
};

export const formatTime = function (date) {
  return format(date, "kk:mm");
};

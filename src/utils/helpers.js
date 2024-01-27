import { format } from "date-fns";

export const formatDate = function (date) {
  return format(date, "dd MMM yyyy");
};

export const formatTime = function (date) {
  return format(date, "kk:mm");
};

export const getEmoji = function (code) {
  const symbol = code.split("-");
  const codesArray = [];
  symbol.forEach((el) => codesArray.push("0x" + el));
  const emojiHexCode = String.fromCodePoint(...codesArray);

  return emojiHexCode;
};

import { getDate } from "./getDate"

export const getChartKey = () => {
  const result = [];
  for (let i = 4; i > -1; i--) {
    result.push(getDate(i));
  }
  return result;
}
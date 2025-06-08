import { CustomSeries, GetChartTypes } from "../../interface/chart";

export const getChartData = (res: GetChartTypes[], keys: string[]) => {
  const result: CustomSeries = {
    "id": "방문자수",
    "data": []
  }
  keys.map((v) => {
    let count = 0;
    if (res) {
      res.map((v2) => {
        if (v2['date'] === v){
          count = v2['count'];
        }
      })
    }
    result["data"].push({
      "x": v,
      "y": count,
    })
  })
  return [result];
}
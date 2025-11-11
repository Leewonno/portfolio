export type CustomSeries = {
  id: string;
  data: { x: string; y: number }[];
};

export interface ChartTypes {
  data: CustomSeries[],
}

export interface GetChartTypes {
  date: string;
  count: number;
}
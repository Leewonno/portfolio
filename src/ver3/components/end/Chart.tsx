import { PointTooltipProps, ResponsiveLine } from '@nivo/line'
import styled from 'styled-components';
import { ChartTypes, CustomSeries } from '../../interface/chart';

const ToolTip = styled.div`
  background: #1f1f1f;
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  width: fit-content;
`

export default function Chart(props: ChartTypes) {
  const { data } = props;

  return (
    <ResponsiveLine /* or Line for fixed dimensions */
      data={data}
      margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      // axisBottom={{ legend: '최근 방문자수', legendOffset: 36 }}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#ffffff', // x축/y축 눈금 텍스트 색상
            }
          },
          legend: {
            text: {
              fill: '#ffffff', // x축/y축 제목(legend) 텍스트 색상
            }
          }
        },
        legends: {
          text: {
            fill: '#2E8B57' // 범례 텍스트 색상
          }
        }
      }}
      lineWidth={2}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'seriesColor' }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      colors={{ scheme: 'blue_purple' }}
      tooltip={({ point }: PointTooltipProps<CustomSeries>) => (
        <ToolTip>{point.data.yFormatted}</ToolTip>
      )}
    />
  )
}
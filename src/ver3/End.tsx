import styled from "styled-components"
import { media } from "./lib/styles/media";
import Chart from "./components/end/Chart";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 25px;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  scroll-snap-align: start;

  ${media.phone`
    padding: 20px;
  `}
`



const LeftBox = styled.div`
  width: 50%;
`

const RightBox = styled.div`
  width: 50%;
`

const data = [
  {
    "id": "방문자",
    "data": [
      {
        "x": "2025-05-01",
        "y": 100
      },
      {
        "x": "2025-05-02",
        "y": 19
      },
      {
        "x": "2025-05-03",
        "y": 25
      },
    ]
  },
]

export default function End() {
  return (
    // 왼쪽 (인삿말) / 오른쪽 방문자수 차트
    <Section>
      <LeftBox>
        인삿말
      </LeftBox>
      <RightBox>
        <Chart data={data} />
      </RightBox>
    </Section>
  )
}
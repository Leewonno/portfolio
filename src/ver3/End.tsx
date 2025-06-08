import styled from "styled-components"
import { media } from "./lib/styles/media";
import Chart from "./components/end/Chart";
import { motion } from "framer-motion";
import useObserver from "./lib/hook/useObserver";
import { customChildVariants, customVariants } from "./lib/styles/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { getDate } from "./lib/utils/getDate";
import { getChartKey } from "./lib/utils/getChartKey";
import { useEffect, useState } from "react";
import { getDocuments } from "./lib/utils/getDocument";
import { CustomSeries } from "./interface/chart";
import { getChartData } from "./lib/utils/getChartData";

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
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextBox = styled(motion.div)`
  font-family: 'S-CoreDream-9BLACK';
  font-size: 50px;
  color: #fff;
  position: relative;
  text-align: center;
  text-shadow: 0 0 6px #000000a8;
`

const SubTextBox = styled(motion.div)`
  font-size: 23px;
  text-shadow: 0 0 6px #000000a8;
  /* font-family: 'S-CoreDream-7EXTRA_BOLD'; */
  font-family: 'S-CoreDream-3Light';
`

const RightBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChartBox = styled.div`
  width: 500px;
  height: 300px;
`

const ChartTitle = styled.div`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  color: #fff;
  font-size: 18px;
  display: flex;
  gap: 5px;
  justify-content: center;
`

const ChartTitleToolTipBox = styled.div`
  position: relative;
`

const ChartTitleToolTipIcon = styled(FontAwesomeIcon)`
  
`

const CharTitleToolTip = styled.div`
  font-family: 'S-CoreDream-3Light';
  position: absolute;
  display: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #333333c1;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  white-space: nowrap;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${ChartTitleToolTipBox}:hover & {
    display: flex;
  }
`

const defaultData: CustomSeries[] = [{
  "id": "방문자",
  "data": [
    {
      "x": "2000-00-00",
      "y": 0
    },
  ]
}]


export default function End() {
  const { ref, animation } = useObserver();
  const [data, setData] = useState<CustomSeries[]>(defaultData)

  useEffect(() => {
    const getData = async () => {
      const keys = getChartKey();
      const res = await getDocuments(keys[0], keys[keys.length - 1]);
      if (res) {
        setData(getChartData(res, keys));
      }
    }
    getData();
  }, [])

  return (
    // 왼쪽 (인삿말) / 오른쪽 방문자수 차트
    <Section>
      <LeftBox>
        <TextBox ref={ref} animate={animation} variants={customVariants}>
          THANK YOU
          <SubTextBox variants={customChildVariants}>끝까지 봐주셔서 감사합니다.</SubTextBox>
          <SubTextBox variants={customChildVariants}>함께할 날을 기다리고 있습니다.</SubTextBox>
        </TextBox>
      </LeftBox>
      <RightBox>
        <ChartBox>
          <ChartTitle>최근 방문자수
            <ChartTitleToolTipBox>
              <ChartTitleToolTipIcon icon={faCircleExclamation} />
              <CharTitleToolTip>nivo 그래프 라이브러리를 이용했습니다.</CharTitleToolTip>
            </ChartTitleToolTipBox>
          </ChartTitle>
          <Chart data={data} />
        </ChartBox>
      </RightBox>
    </Section>
  )
}
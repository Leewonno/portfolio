import styled from "styled-components"
import Intro from "./Intro"
import nmixx from "../img/nmixx_gray.png"
import Release from "./Release"
import My from "./My"
import Personal from "./Personal"
import Career from "./Career"
import End from "./End"
import Skill from "./Skill"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-behavior: smooth;
`

const FixedBackground = styled.img`
  position: fixed;
  z-index: -1;
  transition: all 1s;
  width: 100%;
  height: 100vh;
  filter: brightness(0.6);
  object-fit: cover;
`

export default function Home() {
  return (
    <Container>
      {/* 엔믹스 + O.O 확대 애니메이션 */}
      <Intro />
      {/* 배포된 프로젝트 */}
      <Release />
      {/* 기술 */}
      <Skill />
      {/* 나에 대해서 */}
      <My />
      {/* 경력 */}
      <Career />
      {/* 자기소개 */}
      {/* <Personal /> */}
      {/* 마지막 -> 인사 + 방문자수 차트 */}
      <End />
      {/* 고정 배경 이미지 */}
      <FixedBackground src={nmixx} alt="섹션1_배경" />
    </Container>
  )
}
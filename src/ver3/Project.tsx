import styled from "styled-components"
import nmixx from "../img/nmixx_gray.png"
import ProjectManageBox from "./components/project/ProjectManageBox"
import Section from "./common/Section"
import ProjectViewBox from "./components/project/ProjectViewBox"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function Project() {
  return (
    <Container>
      <Section>
        <ProjectManageBox />
        <ProjectViewBox />
      </Section>
      <FixedBackground src={nmixx} alt="섹션1_배경" />
    </Container>
  )
}
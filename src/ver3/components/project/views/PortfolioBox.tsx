import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function PortfolioBox() {

  return (
    <Box>
      <Title>포트폴리오</Title>
      <Division>개인 프로젝트</Division>
    </Box>
  )
}


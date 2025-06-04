import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function LebuBox() {

  return (
    <Box>
      <Title>부산 관광 정보 사이트, LEBU</Title>
      <Division>팀 프로젝트</Division>
    </Box>
  )
}


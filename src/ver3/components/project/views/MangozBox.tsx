import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function MangozBox() {

  return (
    <Box>
      <Title>음악 스트리밍 사이트, MangoZ</Title>
      <Division>팀 프로젝트</Division>
    </Box>
  )
}


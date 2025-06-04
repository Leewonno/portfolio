import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function LyricsBox() {

  return (
    <Box>
      <Title>가사 자막 입력 도우미, LYRICS</Title>
      <Division>개인 프로젝트</Division>
    </Box>
  )
}


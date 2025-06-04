import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function NovelcutBox() {

  return (
    <Box>
      <Title>웹소설 연재 사이트, NOVELCUT</Title>
      <Division>개인 프로젝트</Division>
    </Box>
  )
}


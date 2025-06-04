import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function NovelpediaBox() {

  return (
    <Box>
      <Title>소설 만화 리뷰 위키, NOVELPEDIA</Title>
      <Division>팀 프로젝트</Division>
    </Box>
  )
}


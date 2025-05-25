import styled from "styled-components"
import Carousel from "../../common/Carousel"
import { useContext } from "react"
import ProjectContext from "../../store/project-context"

const Box = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  gap: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
`

const LeftBox = styled.div`
  width: 500px;
`

const RightBox = styled.div`
  
`

export default function ProjectViewBox() {

  const context = useContext(ProjectContext);
  const { project } = context;

  return (
    // 왼쪽 Carousel(사이트 이미지) + 페이지 이름
    // 오른쪽 프로젝트 설명 및 사용 스킬
    <Box>
      <LeftBox>
        <Carousel project={project} />
      </LeftBox>
      <RightBox>
        ssss
      </RightBox>
    </Box>
  )
}
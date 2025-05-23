import styled from "styled-components"
import ProjectButton from "./ProjectButton"

const Box = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`

export default function ProjectManageBox() {
  return (
    <Box>
      {/* 프로젝트 버튼 */}
      {/* 클릭된 버튼에 따른 프로젝트를 보여줌 */}
      <ProjectButton id={"lyrics"} name="project">LYRICS</ProjectButton>
      <ProjectButton id={"demure"} name="project">디뮤어</ProjectButton>
      <ProjectButton id={"novelcut"} name="project">노벨컷</ProjectButton>
      <ProjectButton id={"mangoz"} name="project">망고즈</ProjectButton>
      <ProjectButton id={"lebu"} name="project">레부</ProjectButton>
      <ProjectButton id={"novelpedia"} name="project">노벨피디아</ProjectButton>
    </Box>
  )
}
import styled from "styled-components"
import ProjectButton from "./ProjectButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard, faBookOpen, faHeadphones, faLocationDot, faMusic, faScissors, faTag, faUser } from "@fortawesome/free-solid-svg-icons"

const Box = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  gap: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
`

export default function ProjectManageBox() {
  return (
    <Box>
      {/* 프로젝트 버튼 */}
      {/* 클릭된 버튼에 따른 프로젝트를 보여줌 */}
      <ProjectButton id={"portfolio"} name="project" checked={true}>
        <FontAwesomeIcon icon={faAddressCard} />
        포트폴리오
      </ProjectButton>
      <ProjectButton id={"demure"} name="project" checked={true}>
        <FontAwesomeIcon icon={faTag} />
        Demure
      </ProjectButton>
      <ProjectButton id={"lyrics"} name="project">
        <FontAwesomeIcon icon={faMusic} />LYRICS
      </ProjectButton>
      <ProjectButton id={"novelcut"} name="project">
        <FontAwesomeIcon icon={faScissors} />
        노벨컷
      </ProjectButton>
      <ProjectButton id={"mangoz"} name="project">
        <FontAwesomeIcon icon={faHeadphones} />
        망고즈
      </ProjectButton>
      <ProjectButton id={"lebu"} name="project">
        <FontAwesomeIcon icon={faLocationDot} />
        레부
      </ProjectButton>
      <ProjectButton id={"novelpedia"} name="project">
        <FontAwesomeIcon icon={faBookOpen} />
        노벨피디아
      </ProjectButton>
    </Box>
  )
}
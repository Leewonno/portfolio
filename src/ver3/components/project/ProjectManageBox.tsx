import styled from "styled-components"
import ProjectButton from "./ProjectButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard, faBookOpen, faHeadphones, faLocationDot, faMusic, faScissors, faTag } from "@fortawesome/free-solid-svg-icons"
import { useHorizontalScroll } from "../../lib/utils/useScroll"
import scroll from "../../../img/new/sm_scroll.png"

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  gap: 8px;
  box-sizing: border-box;
  padding: 20px;
  /* margin-bottom: 20px; */
  width: 700px;
  cursor: url(${scroll}) 0 0, progress;

  * {
    cursor: inherit;
  }
`

export default function ProjectManageBox() {
  const scrollRef = useHorizontalScroll();
  return (
    <Box ref={scrollRef}>
      {/* 프로젝트 버튼 */}
      {/* 클릭된 버튼에 따른 프로젝트를 보여줌 */}
      <ProjectButton id={"portfolio"} name="project" checked={true}>
        <FontAwesomeIcon icon={faAddressCard} />
        포트폴리오
      </ProjectButton>
      <ProjectButton id={"demure"} name="project">
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
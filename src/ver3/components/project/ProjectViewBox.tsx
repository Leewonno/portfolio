import styled from "styled-components"
import Carousel from "../../common/Carousel"
import { useContext } from "react"
import ProjectContext from "../../store/project-context"
import DemureBox from "./views/DemureBox"
import LyricsBox from "./views/LyricsBox"
import NovelcutBox from "./views/NovelcutBox"
import LebuBox from "./views/LebuBox"
import MangozBox from "./views/MangozBox"
import NovelpediaBox from "./views/NovelpediaBox"

const Box = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #1f1f1f;
`

const LeftBox = styled.div`
  width: 500px;
`

const RightBox = styled.div`
  width: 580px;
  color: #fff;
  font-family: 'S-CoreDream-3Light';
`

const ProjectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
        {
        project === 'demure' ?
          <DemureBox />
          :
        project === 'lyrics' ?
          <LyricsBox />
          :
        project === 'novelcut' ?
          <NovelcutBox />
          :
        project === 'lebu' ?
          <LebuBox />
          :
        project === 'mangoz' ?
          <MangozBox />
          :
        project === 'novelpedia' ?
          <NovelpediaBox />
          :
          <></>
        }
      </RightBox>
    </Box>
  )
}


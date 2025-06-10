import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import Content from "../../../common/Content"
import Accordion from "../../../common/Accordion"
import ListItem from "../../../common/ListItem"
import ProjectLinkBox from "../../../common/ProjectLinkBox"
import ProjectLink from "../../../common/ProjectLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
      <SkillBox skill={[
        { logo: 'React', content: '리액트(React)', color: '61DAFB' },
        { logo: 'TypeScript', content: '타입스크립트(TypeScript)', color: '3178C6', division: true },
        { logo: 'firebase', content: 'Firebase Hosting', color: 'FFCA28' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          동영상 에디터(Premiere Pro)에 자막 입력을 돕기 위해 개발한 웹사이트입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>입력된 가사를 이용한 SRT 파일 생성</ListItem>
          <ListItem>SRT 파일 다운로드</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 개발</ListItem>
          <ListItem>파일 생성 및 다운로드</ListItem>
          <ListItem>Firebase를 이용한 배포</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        <ProjectLink href="https://nmixxfantube-96477.web.app/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </ProjectLink>
        <ProjectLink href="https://github.com/Leewonno/lyrics" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


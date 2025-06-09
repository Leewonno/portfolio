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

export default function NovelcutBox() {

  return (
    <Box>
      <Title>웹소설 연재 사이트, NOVELCUT</Title>
      <Division>개인 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'React', content: '리액트(React)', color: '61DAFB', },
        { logo: 'styledcomponents', content: 'Styled-components', color: 'DB7093', },
        { logo: 'JavaScript', content: '자바스크립트(JavaScript)', color: 'F7DF1E', division: true },
        { logo: 'nodedotjs', content: 'Node.js', color: '339933' },
        { logo: 'firebase', content: 'Firebase(재배포)', color: 'FFCA28', division: true },
        { logo: 'Mysql', content: 'MySQL', color: '4479A1' },
        { logo: 'firebase', content: 'Firebase FireStore(재배포)', color: 'FFCA28' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          컷툰처럼 새로운 보기 방식을 적용한 웹소설 연재 사이트입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>소설 생성 및 회차 연재</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 개발</ListItem>
          <ListItem>useContext Hook을 이용한 전역 상태를 관리</ListItem>
          <ListItem>JWT, Bcrypt를 이용한 회원가입 및 인증</ListItem>
          <ListItem>CLOUDTYPE을 이용한 배포</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        <ProjectLink href="https://novelcut-1f6f2.web.app/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </ProjectLink>
        <ProjectLink href="https://github.com/Leewonno/project3" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


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

export default function MyLogBox() {

  return (
    <Box>
      <Title>DB 없이 운영하는 나만의 블로그, MyLog</Title>
      <Division>개인 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'nextdotjs', content: 'Next.js', color: '000000', },
        { logo: 'React', content: '리액트(React)', color: '61DAFB', },
        { logo: 'styledcomponents', content: 'Styled-components', color: 'DB7093', },
        { logo: 'TypeScript', content: '타입스크립트(TypeScript)', color: '3178C6', division: true },
        { logo: 'vercel', content: 'Vercel', color: '000000' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          MyLog는 Next.js 15를 기반으로 개발된 개인 블로그입니다. 별도의 데이터베이스 서버 없이 JSON 파일로 데이터를 관리하며, Markdown 문법을 이용해 간편하게 글을 작성할 수 있습니다.
        </Accordion>
        <Accordion title="개발 목적" open={true}>
          <ListItem>비용 부담이 큰 데이터베이스를 사용하지 않고도 개인 블로그를 운영할 수 있도록 개발하였습니다.</ListItem>
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>게시판 : JSON 파일을 통해 글을 작성, 수정, 삭제할 수 있습니다.</ListItem>
          <ListItem>마이페이지 : JSON 파일을 통해 블로그 이름, 사용자 정보를 관리할 수 있습니다.</ListItem>
          <ListItem>마크다운 에디터 및 뷰어 : 마크다운 문법으로 글을 작성하고, 뷰어를 통해 미리보기 및 렌더링된 결과를 확인할 수 있습니다.</ListItem>
          <ListItem>반응형 디자인 : 데스크톱과 모바일에서 최적화된 화면을 제공합니다.</ListItem>
          <ListItem>테마 변경: 다크 모드와 라이트 모드 중 원하는 테마를 선택할 수 있습니다.</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 개발</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        <ProjectLink href="https://mylog-leewonno.vercel.app/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </ProjectLink>
        <ProjectLink href="https://github.com/Leewonno/mylog" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


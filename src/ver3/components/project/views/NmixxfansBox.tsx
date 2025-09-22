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
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import s3 from "../../../../img/new/aws-s3.svg"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function NmixxfansBox() {

  return (
    <Box>
      <Title>NMIXX FANS (엔믹스 팬즈)</Title>
      <Division>개인 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'React', content: 'React Native', color: '61DAFB', },
        { logo: 'TypeScript', content: '타입스크립트(TypeScript)', color: '3178C6', division: true },
        { logo: 'django', content: '장고(Django)', color: '092E20'},
        { logo: 'graphql', content: 'GraphQL', color: 'E10098', division: true },
        { logo: 'amazons3', content: 'AWS S3', color: '569A31', division: true, img: s3 },
        { logo: 'Mysql', content: 'MySQL', color: '4479A1' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          JYP 엔터테인먼트의 자회사 Blue Garage에서 개발·운영하는 FANS 서비스를 기반으로 제작한 NMIXX FANS 서비스입니다. 
          React Native로 앱을 개발했으며, 백엔드 서버는 Django와 GraphQL을 이용하여 구축했습니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>아티스트 및 팬 커뮤니티 기능</ListItem>
          <ListItem>게시글 작성 및 댓글 기능</ListItem>
          <ListItem>AWS S3 버킷을 활용한 이미지 업로드</ListItem>
          <ListItem>인기 게시글 조회 기능</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 개발</ListItem>
          <ListItem>Django + GraphQL을 이용한 API 서버 개발</ListItem>
          <ListItem>React Native를 이용한 모바일 앱 개발</ListItem>
          <ListItem>AWS S3 버킷을 이용한 이미지 업로드 기능 구현</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        <ProjectLink href="https://github.com/Leewonno/NMIXX-FANS-SERVER" title="Github(Server)">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
        <ProjectLink href="https://github.com/Leewonno/NMIXX-FANS-APP" title="Github(APP)">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
        <ProjectLink href="https://www.youtube.com/playlist?list=PLxbRBTyPvzi-30qypQgCwtfdSN0dXImkd" title="Youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


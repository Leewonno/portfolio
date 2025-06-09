import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import lambda from "../../../../img/new/aws-lambda.svg"
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

export default function NovelpediaBox() {

  return (
    <Box>
      <Title>소설 만화 리뷰 위키, NOVELPEDIA</Title>
      <Division>팀 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'Jquery', content: '제이쿼리(JQuery)', color: '0769AD', },
        { logo: 'JavaScript', content: '자바스크립트(JavaScript)', color: 'F7DF1E', division: true },
        { logo: 'python', content: 'Python', color: '3776AB' },
        { logo: 'awslambda', content: 'AWS Lambda', color: 'FF9900', division: true, img: lambda },
        { logo: 'firebase', content: 'Firebase Firestore', color: 'FFCA28' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          소설 및 만화 정보를 공유할 수 있는 위키 서비스 입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>문서 생성 및 수정</ListItem>
          <ListItem>문서 수정 이력 저장 및 비교</ListItem>
          <ListItem>작품 추천 서비스(Scikit-Learn/아이템 기반 협업 필터링)</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 리딩</ListItem>
          <ListItem>AWS Lambda를 이용한 추천 알고리즘 동작</ListItem>
          <ListItem>문서 생성 및 수정 이력 관리 로직 개발</ListItem>
          <ListItem>Python + Scikit-Learn을 이용한 추천 알고리즘 개발</ListItem>
          <ListItem>Firebase를 이용한 로그인/회원가입</ListItem>
          <ListItem>Firebase를 이용한 배포</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        <ProjectLink href="https://novelpedia.com/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </ProjectLink>
        <ProjectLink href="https://github.com/novelpedia/graduation" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


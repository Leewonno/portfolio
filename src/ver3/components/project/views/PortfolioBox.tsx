import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import Content from "../../../common/Content"
import Accordion from "../../../common/Accordion"
import ListItem from "../../../common/ListItem"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function PortfolioBox() {

  return (
    <Box>
      <Title>포트폴리오</Title>
      <Division>개인 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'React', content: '리액트(React)', color: '61DAFB', },
        { logo: 'styledcomponents', content: 'Styled-components', color: 'DB7093', },
        { logo: 'TypeScript', content: '타입스크립트(TypeScript)', color: '3178C6', division: true },
        { logo: 'firebase', content: 'Firebase Hosting', color: 'FFCA28', division: true },
        { logo: 'firebase', content: 'Firebase Cloud Firestore', color: 'FFCA28' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          포트폴리오 사이트입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>프로젝트 소개 및 보기</ListItem>
          <ListItem>방문자수 기록 및 그래프 보기</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 개발</ListItem>
          <ListItem>Firebase Cloud FireStore를 이용한 방문자수 기록</ListItem>
          <ListItem>nivo 라이브러리를 이용한 방문자수 그래프 생성</ListItem>
          <ListItem>React-Modal 라이브러리를 이용한 모달창 생성</ListItem>
          <ListItem>Firebase를 이용한 배포</ListItem>
        </Accordion>
      </Content>
    </Box>
  )
}


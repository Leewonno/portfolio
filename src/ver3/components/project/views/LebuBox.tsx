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

export default function LebuBox() {

  return (
    <Box>
      <Title>부산 관광 정보 사이트, LEBU</Title>
      <Division>팀 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'Jquery', content: '제이쿼리(JQuery)', color: '0769AD', },
        { logo: 'JavaScript', content: '자바스크립트(JavaScript)', color: 'F7DF1E', division: true },
        { logo: 'netlify', content: 'Netlify', color: '00C7B7' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          부산 관광 정보 사이트입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>부산 지역 관광지, 맛집, 행사 정보를 보기 위한 캐러셀</ListItem>
          <ListItem>영어, 중국어 번역</ListItem>
          <ListItem>기상청 API를 이용한 부산 지역 날씨 보기</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>메인페이지, Map 태그를 이용한 이미지 영역 분할</ListItem>
          <ListItem>기상청 오픈 API를 이용한 날씨 데이터 가져오기</ListItem>
          <ListItem>Netlify를 이용한 배포</ListItem>
        </Accordion>
      </Content>
    </Box>
  )
}


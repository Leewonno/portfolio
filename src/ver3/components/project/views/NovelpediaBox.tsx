import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"

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
        { logo: 'awslambda', content: 'AWS Lambda', color: 'FF9900', division: true },
        { logo: 'firebase', content: 'Firebase Firestore', color: 'FFCA28' },
      ]} />
    </Box>
  )
}


import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"

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
    </Box>
  )
}


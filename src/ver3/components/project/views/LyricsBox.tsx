import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"

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
    </Box>
  )
}


import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"

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
        { logo: 'firebase', content: 'Firebase Firebase(재배포)', color: 'FFCA28' },
      ]} />
    </Box>
  )
}


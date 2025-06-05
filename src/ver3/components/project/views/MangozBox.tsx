import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function MangozBox() {

  return (
    <Box>
      <Title>음악 스트리밍 사이트, MangoZ</Title>
      <Division>팀 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'Jquery', content: '제이쿼리(JQuery)', color: '0769AD', },
        { logo: 'JavaScript', content: '자바스크립트(JavaScript)', color: 'F7DF1E', division: true },
        { logo: 'nodedotjs', content: 'Node.js', color: '339933' },
        { logo: 'amazonec2', content: 'AWS EC2', color: 'FF9900' },
        { logo: 'amazonrds', content: 'AWS RDS', color: '527FFF' },
        { logo: 'amazons3', content: 'AWS S3', color: '569A31', division: true },
        { logo: 'Mysql', content: 'MySQL', color: '4479A1' },
      ]} />
    </Box>
  )
}


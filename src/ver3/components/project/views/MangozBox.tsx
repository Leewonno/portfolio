import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import ec2 from "../../../../img/new/aws-ec2.svg"
import s3 from "../../../../img/new/aws-s3.svg"
import rds from "../../../../img/new/aws-rds.svg"
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

export default function MangozBox() {

  return (
    <Box>
      <Title>음악 스트리밍 사이트, MangoZ</Title>
      <Division>팀 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'Jquery', content: '제이쿼리(JQuery)', color: '0769AD', },
        { logo: 'JavaScript', content: '자바스크립트(JavaScript)', color: 'F7DF1E', division: true },
        { logo: 'nodedotjs', content: 'Node.js', color: '339933' },
        { logo: 'amazonec2', content: 'AWS EC2', color: 'FF9900', img: ec2 },
        { logo: 'amazonrds', content: 'AWS RDS', color: '527FFF', img: rds },
        { logo: 'amazons3', content: 'AWS S3', color: '569A31', division: true, img: s3 },
        { logo: 'Mysql', content: 'MySQL', color: '4479A1' },
      ]} />
      <Content>
        <Accordion title="개요" open={true}>
          음악 스트리밍 사이트입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>음악 스트리밍</ListItem>
          <ListItem>플레이리스트 생성 및 공유</ListItem>
          <ListItem>Socket.io를 이용한 아티스트톡(A-Talk)</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>JQuery를 이용한 SPA 구조화</ListItem>
          <ListItem>Multer를 이용한 AWS S3 이미지 업로드</ListItem>
          <ListItem>드로그 앤 드랍으로 플레이리스트 곡 순서 변경</ListItem>
          <ListItem>Node.js를 이용한 음악 스트리밍</ListItem>
          <ListItem>Socket.io를 이용한 채팅방 구현</ListItem>
          <ListItem>AWS를 통한 배포</ListItem>
        </Accordion>
      </Content>
      <ProjectLinkBox>
        {/* <ProjectLink href="https://poetic-druid-deac2a.netlify.app/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </ProjectLink> */}
        <ProjectLink href="https://github.com/Leewonno/project2" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </ProjectLink>
      </ProjectLinkBox>
    </Box>
  )
}


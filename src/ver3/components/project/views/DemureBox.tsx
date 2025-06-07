import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import Content from "../../../common/Content"
import ec2 from "../../../../img/new/aws-ec2.svg"
import s3 from "../../../../img/new/aws-s3.svg"
import rds from "../../../../img/new/aws-rds.svg"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function DemureBox() {

  return (
    <Box>
      <Title>가구 쇼핑몰, Demure</Title>
      <Division>팀 프로젝트</Division>
      <SkillBox skill={[
        { logo: 'React', content: '리액트(React)', color: '61DAFB' },
        { logo: 'TypeScript', content: '타입스크립트(TypeScript)', color: '3178C6', division: true },
        { logo: 'NestJs', content: 'NestJs', color: 'E0234E' },
        { logo: 'amazonec2', content: 'AWS EC2', color: 'FF9900', img: ec2 },
        { logo: 'amazonrds', content: 'AWS RDS', color: '527FFF', img: rds },
        { logo: 'amazons3', content: 'AWS S3', color: '569A31', division: true, img: s3 },
        { logo: 'postgresql', content: 'PostgreSQL', color: '4169E1' },
      ]} />
      <Content>
        포트폴리오 사이트입니다.
      </Content>
    </Box>
  )
}


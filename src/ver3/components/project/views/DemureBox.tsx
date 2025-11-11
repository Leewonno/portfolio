import styled from "styled-components"
import Title from "../../../common/Title"
import Division from "../../../common/Division"
import SkillBox from "../../../common/SkillBox"
import Content from "../../../common/Content"
import ec2 from "../../../../img/new/aws-ec2.svg"
import s3 from "../../../../img/new/aws-s3.svg"
import rds from "../../../../img/new/aws-rds.svg"
import Accordion from "../../../common/Accordion"
import ListItem from "../../../common/ListItem"
import ProjectLink from "../../../common/ProjectLink"
import ProjectLinkBox from "../../../common/ProjectLinkBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
        <Accordion title="개요" open={true}>
          이케아(IKEA) 데이터를 활용한 가구 쇼핑몰 입니다.
        </Accordion>
        <Accordion title="주요 기능" open={true}>
          <ListItem>장바구니 담기 및 배송지 관리</ListItem>
          <ListItem>쿠폰 발급 및 사용</ListItem>
          <ListItem>상품 검색 및 색상 검색</ListItem>
          <ListItem>이메일 인증을 통한 회원가입</ListItem>
          <ListItem>카카오 소셜 로그인</ListItem>
        </Accordion>
        <Accordion title="역할" open={true}>
          <ListItem>프로젝트 전체 기획 및 리딩</ListItem>
          <ListItem>NodeMailer를 이용한 이메일 인증</ListItem>
          <ListItem>JWT를 이용한 토큰 발급 및 인증</ListItem>
          <ListItem>Redux-Toolkit을 이용한 전역 상태 관리</ListItem>
          <ListItem>카카오 소셜 로그인</ListItem>
          <ListItem>AWS를 이용한 배포</ListItem>
          <ListItem>쿠폰 발급 및 사용 처리</ListItem>
        </Accordion>
        <ProjectLinkBox>
          {/* <ProjectLink href="https://github.com/KDT9Demure" title="Home">
            <FontAwesomeIcon icon={faHouse} />
          </ProjectLink> */}
          <ProjectLink href="https://github.com/KDT9Demure" title="Github">
            <FontAwesomeIcon icon={faGithub} />
          </ProjectLink>
        </ProjectLinkBox>
      </Content>
    </Box>
  )
}


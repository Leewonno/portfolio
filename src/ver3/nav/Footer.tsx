import { faEnvelope, faSquareArrowUpRight, faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { media } from "../lib/styles/media"

const Container = styled.footer`
  position: relative;
  background-color: #000;
  width: 100%;
  color: #fff;
  font-family: 'S-CoreDream-3Light';
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  ${media.phone`
    height: auto;
    padding: 30px 20px;
  `}
`

const MyBox = styled.div`
  display: flex;
`

const ContactBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const Content = styled.div`
  ${media.phone`
    font-size: 14px;
  `}
`

const VerBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`

const SiteTitle = styled.div`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  font-size: 22px;
  margin-right: 10px;
`

const Title = styled.div`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  font-size: 18px;
  margin-right: 10px;

  ${media.phone`
    font-size: 16px;
  `}
`

const Link = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  ${media.phone`
    font-size: 14px;
  `}
`

export default function Footer() {
  return (
    <Container>
      <MyBox>
        <SiteTitle>WONNO's PORTFOLIO</SiteTitle>
      </MyBox>
      <ContactBox>
        <Title>연락처</Title>
        <Content><FontAwesomeIcon icon={faSquarePhone} /> 010-5253-4143</Content>
        <Content><FontAwesomeIcon icon={faEnvelope} /> dldnjssh123@naver.com</Content>
      </ContactBox>
      <VerBox>
        <Title>이전 버전</Title>
        <Link href="/ver2" target="_blank">버전2 <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>
        <Link href="/ver1" target="_blank">버전1 <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>
      </VerBox>
    </Container>
  )
}
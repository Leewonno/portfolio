import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styled from "styled-components"
import { faScissors, faAddressCard, faBookOpen, faPlane, faFile, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { customChildVariants, customVariants, rotateChildVariants, rotateVariants } from "./lib/styles/animation";
import useObserver from "./lib/hook/useObserver";
import Bold from "./common/Bold";
import { media } from "./lib/styles/media";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  /* background-color: #fff; */
  scroll-snap-align: start;

  ${media.phone`
    padding: 20px;
  `}
`

const LinkBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 10px;

  ${media.phone`
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  `}
`

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: 'S-CoreDream-3Light';
  font-size: 18px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;

  &:hover{
    background-color: #d9d9d9;
  }

  ${media.phone`
    padding: 8px 12px;
    font-size: 14px;
  `}
`

const TextBox = styled(motion.div)`
  display: flex;
  justify-content: center;
`

const Text = styled(motion.div)`
  font-size: 20px;
  font-family: 'S-CoreDream-3Light';
  color: #fff;

  ${media.phone`
    font-size: 18px;
  `}
`

const ProjectButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  color: #000;
  text-decoration: none;
  background-color: #e9e9e9;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: #d9d9d9;
  }
`

const IconBox = styled(motion.div)`
  display: flex;
  border-radius: 50%;
  background-color: #f2f2f2;
  padding: 6px;
  transition: all 0.3s;
`

export default function Release() {
  const { ref, animation } = useObserver();

  // 포폴 사이트 리팩토링 가능성 있으므로
  // 이전 기능 유지 위해
  const location = useLocation();
  const currentPath = location.pathname; // 현재 경로
  const projectPath = `${currentPath.replace(/\/$/, '')}/project`; // 중복 슬래시 방지

  return (
    <Section>
      <TextBox ref={ref} animate={animation} variants={customVariants}>
        <Text variants={customChildVariants}>직접 개발하여 현재 배포 중인 <Bold>프로젝트</Bold>입니다.</Text>
      </TextBox>
      <LinkBox ref={ref} animate={animation} variants={rotateVariants}>
        <LinkButton variants={rotateChildVariants} href="/" target={"_blank"}>
          <FontAwesomeIcon icon={faAddressCard} />
          포트폴리오
        </LinkButton>
        <LinkButton variants={rotateChildVariants} href="https://novelcut-1f6f2.web.app/" target={"_blank"}>
          <FontAwesomeIcon icon={faScissors} />
          노벨컷
        </LinkButton>
        <LinkButton variants={rotateChildVariants} href="https://nmixxfantube-96477.web.app/" target={"_blank"}>
          <FontAwesomeIcon icon={faFile} />
          LYRICS
        </LinkButton>
        <LinkButton variants={rotateChildVariants} href="https://poetic-druid-deac2a.netlify.app/" target={"_blank"}>
          <FontAwesomeIcon icon={faPlane} />
          레부(부산여행)
        </LinkButton>
        <LinkButton variants={rotateChildVariants} href="https://novelpedia.com/" target={"_blank"}>
          <FontAwesomeIcon icon={faBookOpen} />
          노벨피디아
        </LinkButton>
      </LinkBox>
      <ProjectButton href={projectPath} target={'_blank'}>
        프로젝트 상세
        <IconBox>
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </IconBox>
      </ProjectButton>
    </Section>
  )
}
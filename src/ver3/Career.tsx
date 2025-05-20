import styled from "styled-components"
import bg from "../img/nmixx.png"
import seoulsoft from "../img/new/seoulsoft.png"
import useObserver from "./lib/hook/useObserver"
import { media } from "./lib/styles/media"
import { motion } from "framer-motion"
import { customChildVariants, customVariants } from "./lib/styles/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  /* background: url(${bg}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  padding: 50px 0px;

  ${media.phone`
    padding: 20px;
  `}
`

const TopBox = styled(motion.div)`
  
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  ${media.phone`
    font-size: 25px;
    margin-bottom: 20px;
  `}
`

const Title = styled.div`
  font-size: 40px;
  font-family: 'S-CoreDream-9BLACK';
  color: #fff;
  text-shadow: 1px 1px 25px #000;
  user-select: none;
  cursor: pointer;

  ${media.phone`
    font-size: 25px;
  `}
`

const BottomBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
`

const Item = styled(motion.div)`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const ItemLogo = styled.img`
  width: 75px;
  filter: brightness(0);
  margin-bottom: 5px;
`

const ItemTitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`

const ItemTitle = styled.div`
  font-size: 25px;
  font-family: 'S-CoreDream-7EXTRA_BOLD';
`

const ItemDate = styled.div`
  font-size: 15px;
`

const ItemDepartment = styled.div`
  font-size: 15px;
`

const ItemContent = styled.div`
  margin-top: 5px;
  font-size: 16px;
`

const ItemSkillBox = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`

const ItemSkill = styled.img`
  height: 25px;
`

// 경력
export default function Career() {
  const { ref, animation } = useObserver();
  return (
    <Section>
      {/* 상단박스 */}
      <TopBox ref={ref} animate={animation} variants={customChildVariants}>
        <TitleBox>
          <Title title="서울소프트">
            <FontAwesomeIcon icon={faFolderOpen} /> CAREER
          </Title>
        </TitleBox>
      </TopBox>
      <BottomBox ref={ref} animate={animation} variants={customVariants}>
        <Item variants={customChildVariants}>
          <ItemLogo src={seoulsoft} />
          <ItemTitleBox>
            <ItemTitle>서울소프트</ItemTitle>
            <ItemDate>2024.04 ~ (재직중)</ItemDate>
          </ItemTitleBox>
          <ItemDepartment>
            <FontAwesomeIcon icon={faPeopleGroup} /> 모빌리티 개발팀 • 풀스택 개발
          </ItemDepartment>
          <ItemContent>
            • 운수사 ERP 서비스 개발 <br />
            • 운수사 ERP 서비스 개발 <br />
            • 운수사 ERP 서비스 개발 <br />
            • 운수사 ERP 서비스 개발 <br />
            • 운수사 ERP 서비스 개발 <br />
          </ItemContent>
          <ItemSkillBox>
            <ItemSkill src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django" />
            <ItemSkill src="https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" />
          </ItemSkillBox>
        </Item>
      </BottomBox>
    </Section>
  )
}
import styled from "styled-components"
import bg from "../img/nmixx.png"
import seoulsoft from "../img/new/seoulsoft.png"
import useObserver from "./lib/hook/useObserver"
import { media } from "./lib/styles/media"
import { motion } from "framer-motion"
import { customChildVariants, customVariants } from "./lib/styles/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import SemiBold from "./common/SemiBold"

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
  font-family: 'S-CoreDream-3Light';
`

const ItemDepartmentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
`

const Department = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 3px 6px;
  user-select: none;
  font-family: 'S-CoreDream-3Light';
`

const ItemContent = styled.div`
  font-size: 15px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 5px;
  line-height: 1.6;
  font-family: 'S-CoreDream-3Light';
`

const ItemSkillContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  font-family: 'S-CoreDream-3Light';
`

const ItemSkillBox = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`

const ItemSkillInfoBox = styled.div`
  position: absolute;
  display: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #4c4c4cc1;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  white-space: nowrap;
  top: 165%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${ItemSkillBox}:hover & {
    display: flex;
  }
`

const ItemSkill = styled.img`
  height: 25px;
`

const Dot = styled.span`
  margin-right: 15px;
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
          <ItemDepartmentBox>
            <Department><FontAwesomeIcon icon={faPeopleGroup} style={{marginRight:'5px'}} />모빌리티 개발팀</Department>
            <Department>풀스택 개발</Department> 
          </ItemDepartmentBox>
          <ItemContent>
            <Dot>•</Dot>운수사 <SemiBold>ERP 서비스</SemiBold> 개발 <br />
            <Dot>•</Dot><SemiBold>Django</SemiBold> 기반 <SemiBold>MVT 패턴</SemiBold>을 활용한 웹 서비스 개발 <br />
          </ItemContent>
          <ItemSkillContainer>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django" />
              <ItemSkillInfoBox>Python기반 웹 프레임워크</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/JQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" />
              <ItemSkillInfoBox>JavaScript 라이브러리</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" />
              <ItemSkillInfoBox>RDBMS</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonwebservices&logoColor=white" alt="aws" />
              <ItemSkillInfoBox>EC2, RDS, S3</ItemSkillInfoBox>
            </ItemSkillBox>
          </ItemSkillContainer>
        </Item>
      </BottomBox>
    </Section>
  )
}
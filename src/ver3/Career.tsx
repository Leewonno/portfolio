import styled from "styled-components"
import bg from "../img/nmixx.png"
import aws from "../img/new/aws.svg"
// import seoulsoft from "../img/new/seoulsoft.png"
import { media } from "./lib/styles/media"
import { motion } from "framer-motion"
import { customChildVariants, customVariants } from "./lib/styles/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen, faHammer, faKeyboard, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import Bold from "./common/Bold"
import useOnceObserver from "./lib/hook/useOnceObserver"

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
    font-size: 23px;
  `}
`

const BottomBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  gap: 50px;

  ${media.phone`
    width: 100%;
  `}
`

const Item = styled(motion.div)`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
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

  ${media.phone`
    gap: 5px;
  `}
`

const ItemTitle = styled.div`
  font-size: 25px;
  font-family: 'S-CoreDream-7EXTRA_BOLD';

  ${media.phone`
    font-size: 18px;
  `}
`

const ItemDate = styled.div`
  font-size: 15px;
  font-family: 'S-CoreDream-3Light';
  
  ${media.phone`
    font-size: 12px;
  `}
`

const ItemDepartmentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;

  ${media.phone`
    font-size: 14px;
    flex-direction: column;
    align-items: flex-start;
  `}
`

const Department = styled.div`
  border-radius: 5px;
  padding: 3px 6px;
  background-color: #f1f1f1;
  user-select: none;
  font-family: 'S-CoreDream-3Light';
  display: flex;
  align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  /* padding: 3px 6px; */
  /* border-radius: 3px; */
`

const ItemContent = styled.ul`
  font-size: 15px;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
  line-height: 1.6;
  font-family: 'S-CoreDream-3Light';
  margin: 0;

  ${media.phone`
    font-size: 14px;
  `}
`

const ItemSkillContainer = styled.div`
  /* margin-top: 10px; */
  display: flex;
  gap: 5px;
  font-family: 'S-CoreDream-3Light';
  
  ${media.phone`
    flex-wrap: wrap;
  `}
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
  background-color: #333333c1;
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
  height: 26px;

  ${media.phone`
    height: 22px;
  `}
`

const ItemSkillImage = styled.img`
  background-color: #232f3e;
  height: 26px;
  width: 30px;
  object-fit: cover;
  border-radius: 3px;

  ${media.phone`
    height: 22px;
    width: 26px;
  `}
`

const ItemList = styled.li`
  padding-left: 5px;
  margin-left: 20px;

  ${media.phone`
    padding-left: 5px;
    margin-left: 15px;
  `}
`

// 경력
export default function Career() {
  const { ref, animation } = useOnceObserver();
  return (
    <Section>
      {/* 상단박스 */}
      <TopBox ref={ref} animate={animation} variants={customChildVariants}>
        <TitleBox>
          <Title title="서울소프트">
            <FontAwesomeIcon icon={faFolderOpen} /> CAREER & CERTIFICATE
          </Title>
        </TitleBox>
      </TopBox>
      <BottomBox ref={ref} animate={animation} variants={customVariants}>
        <Item variants={customChildVariants}>
          {/* <ItemLogo src={seoulsoft} /> */}
          <ItemTitleBox>
            <ItemTitle>서울소프트</ItemTitle>
            <ItemDate>2024.04 ~ (재직중)</ItemDate>
          </ItemTitleBox>
          <ItemDepartmentBox>
            <Department>
              <StyledFontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: '5px' }} />
              모빌리티 개발팀
            </Department>
            <Department>
              <StyledFontAwesomeIcon icon={faKeyboard} style={{ marginRight: '5px' }} />풀스택 개발
            </Department>
          </ItemDepartmentBox>
          <ItemSkillContainer>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/-092E20?style=flat&logo=django&logoColor=white" alt="Django" />
              <ItemSkillInfoBox>Django</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" />
              <ItemSkillInfoBox>JQuery</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkill src="https://img.shields.io/badge/-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" />
              <ItemSkillInfoBox>MySQL</ItemSkillInfoBox>
            </ItemSkillBox>
            <ItemSkillBox>
              <ItemSkillImage src={aws} alt="aws" />
              <ItemSkillInfoBox>AWS EC2, RDS, S3</ItemSkillInfoBox>
            </ItemSkillBox>
          </ItemSkillContainer>
          <ItemContent>
            <ItemList>운수사 <Bold>ERP</Bold> 서비스 개발 <br /></ItemList>
            <ItemList><Bold>Django</Bold> 기반 <Bold>MVT 패턴</Bold>을 활용한 웹 서비스 개발 <br /></ItemList>
            <ItemList><Bold>JQuery</Bold> 라이브러리를 이용한 프론트엔드 기능 구현 <br /></ItemList>
            <ItemList><Bold>Amazone Web Service</Bold> 를 이용한 서비스 배포 및 인프라 관리 <br /></ItemList>
          </ItemContent>
        </Item>

        {/* 자격증 */}
        <Item variants={customChildVariants}>
          {/* <ItemLogo src={seoulsoft} /> */}
          <ItemTitleBox>
            <ItemTitle>자격증(CERTIFICATE)</ItemTitle>
            {/* <ItemDate>2024.04 ~ (재직중)</ItemDate> */}
          </ItemTitleBox>
          <ItemContent>
            <ItemList>제 57회 SQLD 자격증 (SQL Developer)</ItemList>
            <ItemList>KSTQB CTBL (Certified Tester Basic Level)</ItemList>
            <ItemList>DSAC 3급(프로그래머)</ItemList>
            <ItemList>ITQ 인터넷 A등급</ItemList>
          </ItemContent>
        </Item>
      </BottomBox>
    </Section>
  )
}
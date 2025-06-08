import styled from "styled-components"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBoxArchive,
  faCalendar,
  faEnvelope,
  faGraduationCap,
  faPaperclip,
  faPlaneDeparture,
  faUser
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import useObserver from "./lib/hook/useObserver"
import { customChildVariants, rotateChildVariants, rotateVariants } from "./lib/styles/animation"
import { media } from "./lib/styles/media"
import bg from "../img/nmixx.png";
import { faCopy, faPaperPlane, faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
// import lee from "../img/new/lee2.png"
// import back from "../img/new/back.jpg"

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  /* background-color: #fff; */
  scroll-snap-align: start;
  background: url(${bg});
  /* background-image: url('/public/nmixx.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  ${media.phone`
    padding: 20px;
  `}
`

const TopBox = styled(motion.div)`
  
`

const BottomBox = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;

  ${media.phone`

    width: 100%;
    gap: 20px;
  `}
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

// const CoreBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   box-sizing: border-box;

//   ${media.phone`
//     width: 100%;
//     padding: 20px;
//   `}
// `

// const ImageBox = styled.div`
//   width: 250px;
//   height: 250px;
//   border-radius: 50%;
//   /* background-color: #f4f4f4; */
//   display: flex;
//   justify-content: center;
//   /* overflow: hidden; */
//   /* background: url(${back}); */

//   ${media.phone`
//     width: 100%;
//     height: auto;
//     aspect-ratio: 1 / 1;
//   `}
// `

// const Image = styled.img`
//   width: 80%;
//   object-fit: cover;
//   object-position: 0px 5px;
// `

const RightBox = styled(motion.div)`
  width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  ${media.phone`
    width: 100%;
  `}
`

const ItemBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
`

const Item = styled(motion.div)`
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  width: 380px;
  box-sizing: border-box;
  transition: all 0.3s;

  ${media.phone`
    width: 100%;
  `}
`

const LeftItem = styled.div`

`

const RightItem = styled.div`
  margin-left: 20px;
  margin-top: -3px;
`

const ItemTitle = styled.div`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  font-size: 20px;
  display: flex;
  gap: 5px;

  ${media.phone`
    font-size: 18px;
  `}
`

const ItemContent = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-family: 'S-CoreDream-3Light';
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${media.phone`
    font-size: 13px;
  `}
`

const LinkBox = styled.div`
  display: flex;
  gap: 5px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;

  ${media.phone`
    font-size: 25px;
  `}
`

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  color: #000;
  text-decoration: none;
  background-color: #e9e9e9;
  border-radius: 25px;
  transition: all 0.3s;
  width: fit-content;
  cursor: pointer;

  &:hover{
    background-color: #d9d9d9;
  }

  ${media.phone`
    padding: 4px 8px;
  `}
`

export default function My() {

  const { ref, animation } = useObserver();

  const [copy, setCopy] = useState<boolean>(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dldnjssh123@naver.com");
    setCopy(true);
  }

  return (
    // 가장 왼쪽에 사진 or 자기소개
    // 오른쪽에 2줄로 나에 대한 정보들
    <Section>
      {/* 상단박스 */}
      <TopBox ref={ref} animate={animation} variants={customChildVariants}>
        <TitleBox>
          <Title title="NSWER 1기, NSWER 2기, NSWER 3기">
            <FontAwesomeIcon icon={faPaperclip} /> ABOUT ME
          </Title>
        </TitleBox>
      </TopBox>
      {/* 하단박스 */}
      <BottomBox>
        {/* 사진 or 자기소개 */}
        {/* <CoreBox>
          <ImageBox>
              <Image src={lee} />
            </ImageBox>
        </CoreBox> */}
        {/* 나에 대한 정보 */}
        <RightBox>
          <ItemBox ref={ref} animate={animation} variants={rotateVariants}>
            {/* 이름 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faUser} />
              </LeftItem>
              <RightItem>
                <ItemTitle>이름</ItemTitle>
                <ItemContent>이원노</ItemContent>
              </RightItem>
            </Item>
            {/* 생년월일 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faCalendar} />
              </LeftItem>
              <RightItem>
                <ItemTitle>생년월일</ItemTitle>
                <ItemContent>1999.08.03</ItemContent>
              </RightItem>
            </Item>
            {/* 최종학력 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faGraduationCap} />
              </LeftItem>
              <RightItem>
                <ItemTitle>최종학력</ItemTitle>
                <ItemContent>남서울대학교</ItemContent>
                <ItemContent>(컴퓨터소프트웨어학과)</ItemContent>
              </RightItem>
            </Item>
            {/* 참여활동 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faPlaneDeparture} />
              </LeftItem>
              <RightItem>
                <ItemTitle>참여활동</ItemTitle>
                <ItemContent>포스코 X 코딩온 웹 풀스택 부트캠프 9기</ItemContent>
                <ItemContent>(2023.07~2023.12)</ItemContent>
              </RightItem>
            </Item>
            {/* 아카이빙 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faBoxArchive} />
              </LeftItem>
              <RightItem>
                <ItemTitle>아카이빙</ItemTitle>
                <ItemContent>
                  <Link href="https://github.com/Leewonno" target="_blank" rel="noreferrer">
                    <StyledFontAwesomeIcon icon={faGithub} style={{ fontSize: "25px", color: "black" }} /> Github
                  </Link>
                </ItemContent>
              </RightItem>
            </Item>
            {/* 이메일 */}
            <Item variants={rotateChildVariants}>
              <LeftItem>
                <StyledFontAwesomeIcon icon={faEnvelope} />
              </LeftItem>
              <RightItem>
                <ItemTitle>
                  이메일
                </ItemTitle>
                <ItemContent>
                  dldnjssh123@naver.com
                  <LinkBox>
                    <Link href="mailto:dldnjssh123@naver.com">
                      <StyledFontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "16px", color: "black" }} /> 전송
                    </Link>
                    <Link onClick={() => handleEmailClick()}>
                      {copy ?
                        <StyledFontAwesomeIcon icon={faSquareCheck} style={{ fontSize: "16px", color: "black" }} />
                        :
                        <StyledFontAwesomeIcon icon={faCopy} style={{ fontSize: "16px", color: "black" }} />
                      } 복사
                    </Link>
                  </LinkBox>
                </ItemContent>
              </RightItem>
            </Item>
          </ItemBox>
        </RightBox>
      </BottomBox>
    </Section>
  )
}
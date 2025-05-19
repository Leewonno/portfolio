import styled from "styled-components"
import bg from "../img/nmixx.png"
import useObserver from "./lib/hook/useObserver"
import { media } from "./lib/styles/media"
import { motion } from "framer-motion"
import { customChildVariants } from "./lib/styles/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"

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
    </Section>
  )
}
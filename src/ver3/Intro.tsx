import styled from "styled-components"
import oo from "../img/new/oo_logo.png"
import know from "../img/new/know.png"
import { useEffect, useRef } from "react"
import { media } from "./lib/styles/media"

const Section = styled.section`
  width: 100%;
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`

const AnimationBox = styled.div`
  width: 10%;
  transition: all 0.3s ease;
  position: absolute;
  top: 50vh;
  cursor: pointer;

  ${media.phone`
    width: 20%;
  `}
`

const IntroImage = styled.img`
  width: 100%;
  transition: all 0.3s ease;
  ${AnimationBox}:hover & {
    filter: brightness(0.4);
  }
`

const AnimationText = styled.div`
  user-select: none;
  color: #fff;
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;

  ${AnimationBox}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TextBox = styled.div`
  position: absolute;
  top: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: 'S-CoreDream-3Light';
  color: #fff;
  font-size: 30px;
`

const Text = styled.div`
  font-family: 'S-CoreDream-3Light';
  color: #fff;
  font-size: 20px;
`

const Bold = styled.span`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
`

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aniRef = useRef<HTMLDivElement>(null);

  const targetScale = useRef(1);
  const currentScale = useRef(1);

  const targetTop = useRef(0);
  const currentTop = useRef(0);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  useEffect(() => {
    const section = sectionRef.current
    const ani = aniRef.current
    if (!section || !ani) return;
    // section 위치
    const sectionTop = section.offsetTop;
    // section, ani 요소의 높이
    const sectionHeight = section.offsetHeight;
    const imgHeight = ani.offsetHeight;
    
    const handleScroll = () => {
      // 현재 스크롤 위치
      const scrollY = window.scrollY;
      
      // 현재 스크롤 위치 - section 위치 = section 위치 부터 스크롤한 거리
      const distanceScrolled = scrollY - sectionTop;
      const scrollableHeight = sectionHeight - window.innerHeight;

      // 0 ~ 1 로 고정
      const scrollRatio = Math.min(Math.max(distanceScrolled / scrollableHeight, 0), 1);
      // 확대 범위: 2 ~ 3
      targetScale.current = 2 + scrollRatio

      // 스크롤이 가장 상단일 때는 200vh 기준 50vh
      // 스크롤이 100vh 이상일 때는 150vh 에 고정
      const baseTop = sectionTop + window.innerHeight / 2 // 50vh
      const maxTop = sectionTop + sectionHeight - window.innerHeight / 2 // 150vh
      targetTop.current = Math.min(baseTop + scrollY - sectionTop, maxTop) - (imgHeight * targetScale.current)
    }

    const onScroll = () => {
      handleScroll()
      requestAnimationFrame(onScroll)
    }
    onScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 애니메이션 루프
  useEffect(() => {
    const ani = aniRef.current
    if (!ani) return
    const animate = () => {
      // 점진적으로 목표값으로 이동
      currentScale.current = lerp(currentScale.current, targetScale.current, 0.1)
      currentTop.current = lerp(currentTop.current, targetTop.current, 0.1)

      ani.style.transform = `scale(${currentScale.current})`
      ani.style.top = `${currentTop.current}px`

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <Section ref={sectionRef}>
      {/* 엔믹스 + O.O 확대 애니메이션 */}
      <AnimationBox ref={aniRef}>
        <AnimationText>▶︎</AnimationText>
        <IntroImage src={oo} alt="oo_logo"/>
      </AnimationBox>
      {/* 소개문구 75% 위치에 고정 */}
      <TextBox>
        <Title>안녕하세요</Title>
        <Text>걸그룹 엔믹스를 좋아하는 Full-Stack 개발자 <Bold>이원노</Bold>입니다</Text>
        <Text>엔믹스처럼 열정, 노력, 끈기를 바탕으로 최고의 실력자가 되겠습니다</Text>
      </TextBox>
    </Section>
  )
}
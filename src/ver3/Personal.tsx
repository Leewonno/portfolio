import styled from "styled-components"
import bg from "../img/nmixx.png"
import { media } from "./lib/styles/media"
import { motion } from "framer-motion"
import { customChildVariants, customVariants } from "./lib/styles/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faMicrophone } from "@fortawesome/free-solid-svg-icons"
import SemiBold from "./common/SemiBold"
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
    font-size: 25px;
  `}
`

const ListBox = styled(motion.div)`
  width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.phone`
    width: 100%;
  `}
`

const ItemBox = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ItemTitle = styled.div`
  font-size: 18px;
  font-family: 'S-CoreDream-7EXTRA_BOLD';
`

const ItemContent = styled.div`
  font-family: 'S-CoreDream-3Light';
  line-height: 1.6;

  ${media.phone`
    font-size: 14px;
  `}
`

const CustomSemiBold = styled.span`
  font-family: 'S-CoreDream-3Light';
  font-weight: 400;

  ${ItemBox}:hover & {
    font-family: 'S-CoreDream-7EXTRA_BOLD';
  } 
`

// 자기소개서
export default function Personal() {

  const { ref, animation } = useOnceObserver();

  return (
    <Section>
      {/* 상단박스 */}
      <TopBox ref={ref} animate={animation} variants={customChildVariants}>
        <TitleBox>
          <Title title="NSWER 1기, NSWER 2기, NSWER 3기">
            <FontAwesomeIcon icon={faMicrophone} /> INTERVIEW
          </Title>
        </TitleBox>
      </TopBox>
      <ListBox ref={ref} animate={animation} variants={customVariants}>
        <ItemBox variants={customChildVariants}>
          <ItemTitle>
            <FontAwesomeIcon icon={faBell} /> 전공선택의 이유
          </ItemTitle>
          <ItemContent>
            <SemiBold>[컴퓨터소프트웨어학과]</SemiBold> <br />
            <br />
            우리 주변에는 다양한 전자기기가 있고, 이들은 대부분 인터넷에 연결되어 있습니다. 저는 이러한 연결성을 바탕으로 '<CustomSemiBold>사람들을 이어주는 웹사이트</CustomSemiBold>'를 만들고 싶었습니다.
            고등학교 시절, HTML, CSS, JavaScript를 독학하며 직접 웹사이트를 만들었습니다. 결과물은 부족했지만, 그 과정을 통해 코딩에 흥미를 느꼈고, 더 깊이 배우고 싶다는 열망이 생겼습니다.
            이러한 관심을 바탕으로, 프로그래밍 언어를 배울 수 있는 <CustomSemiBold>컴퓨터소프트웨어학과</CustomSemiBold>를 전공으로 선택했습니다. <br />
            <br />
            대학교에서는 객체지향프로그래밍, 자료구조 등 핵심 전공 수업을 수강하며 프로그래밍의 기초를 다졌습니다. 특히 객체지향프로그래밍 강의에서는 우수한 성적을 거두었고, 교수님의 추천으로 보조 연구원으로도 활동했습니다.
            하지만 전공 수업만으로는 제가 원하는 웹 개발에 대한 학습이 부족하다고 느껴, 교양 및 타 전공 강의를 찾아 들었습니다. 웹디자인, 웹서버 및 DB, 인터넷 프로그래밍 강의를 수강했고, 모두에서 최고 학점을 받으며 마무리했습니다.
          </ItemContent>
        </ItemBox>
        <ItemBox variants={customChildVariants}>
          <ItemTitle>
            <FontAwesomeIcon icon={faBell} /> 부트캠프에 참여한 이유
          </ItemTitle>
          <ItemContent>
            <SemiBold>[웹 개발자로 진로를 결정]</SemiBold> <br />
            <br />
            대학교에서 컴퓨터를 전공하며 진로에 대해 오랜 시간 고민했습니다. <br />
            게임, 정보 보안, 인공지능 등 다양한 분야가 있었지만, 처음 프로그래밍을 배운게 된 계기인 '<CustomSemiBold>웹 사이트</CustomSemiBold>'를 개발하고 싶었습니다. <br />
            하지만 학부과정에서는 웹 개발을 깊이 있게 배우기 어려웠고, <br />
            특히 <CustomSemiBold>React, Node.js, Spring</CustomSemiBold>과 같은 프레임워크나 라이브러리를 활용해본 경험도 없었습니다. <br />
            <CustomSemiBold>팀 프로젝트</CustomSemiBold> 역시 웹 관련 프로젝트는 두 번 뿐이라 경험이 부족하다고 느꼈습니다. <br />
            <br />
            그래서 졸업을 한 학기 앞두고, <CustomSemiBold>프론트엔드와 백엔드 지식을 모두 배우고, 팀 프로젝트 경험</CustomSemiBold>을 쌓을 수 있는 부트캠프에 참여했습니다. <br />
            부트캠프에서 대학교 때 접했던 Node.js를 더 깊이 있게 다뤘고, React, Spring Boot도 새롭게 익힐 수  있었습니다. <br />
            또한, 팀 프로젝트를 통해 프론트엔드와 백엔드의 역할을 명확히 이해하게 되었고, Figma, Notion, Github 등 협업 도구 사용에도 익숙해졌습니다. <br />
            부트캠프를 통해 웹 개발자로서 나아갈 방향을 구체적으로 설정할 수 있었고, 한 걸음 성장하는 계기가 되었습니다. <br />
          </ItemContent>
        </ItemBox>
        {/* <ItemBox variants={customChildVariants}>
          <ItemTitle>
            <FontAwesomeIcon icon={faBell} /> 프론트엔드 개발자가 되기 위해
          </ItemTitle>
          <ItemContent>
            <SemiBold>[자바스크립트에 대한 이해 확장과 React 개발]</SemiBold>  <br />
            <br />
            저는 넓게 많이 아는 것보다, 하나를 깊이 있게 익히는 것이 더 중요하다고 생각합니다.  <br />
            프론트엔드 개발자가 가장 많이 사용하는 언어인 '<CustomSemiBold>자바스크립트</CustomSemiBold>'에 집중하며, 기초부터 탄탄히 다지기 위해 노력해 왔습니다. <br />
            자바스크립트와 타입스크립트 기반의 라이브러리 및 프레임워크에 중점을 두고 학습하고 있으며, <br />
            알고리즘 문제를 자바스크립트로 해결하며 언어에 대한 이해도를 높이고 있습니다. <br />
            <br />
            특히 저는 <CustomSemiBold>React</CustomSemiBold>에 집중하고 있습니다. <br />
            이에 『모던 자바스크립트 Deep Dive』와 『모던 리액트 Deep Dive』 과 같은 서적을 통해, <br />
            <CustomSemiBold>자바스크립트의 기본 개념과 동작 원리</CustomSemiBold>를 깊이 있게 이해하고, <CustomSemiBold>React의 구조와 작동 방식</CustomSemiBold>에 대해서도 학습하고 있습니다. <br />
            더불어 React와 Next.js를 활용한 프로젝트를 통해 실전 경험을 쌓아가고 있습니다. <br />
            자바스크립트에 대한 이해와 React 개발 경험을 바탕으로, 맡은 바에서 최고의 성과를 내는 프론트엔드 개발자가 되겠습니다. <br />
          </ItemContent>
        </ItemBox> */}
      </ListBox>
    </Section>
  )
}
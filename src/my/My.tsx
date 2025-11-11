import styled from "styled-components";
import CarouselBox from "./common/CarouselBox";
import bg from "../img/nmixx_gray.png";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;

  img{
    position: fixed;
    z-index: -1;
    transition: all 1s;
    width: 100%;
    height: 100vh;
    filter: brightness(0.4);
    object-fit: cover;
  }
`

export default function My() {
  return (
    <Section>
      {/* Navigator : 위젯 목록 */}

      {/* Carousel : 슬라이드 보드 */}
      <CarouselBox />

      {/* Modal : 모달 창 */}

      {/* 배경화면 */}
      <img src={bg} alt="background" />
    </Section>
  )
}
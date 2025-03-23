import styled from "styled-components";
import CarouselAutoMove from "../components/CarouselAutoMove";
import CarouselMove from "../components/CarouselMove";


const ComponentBox = styled.div`
  
`

{/* Carousel : 슬라이드 보드 */}
export default function CarouselBox() {
  return (
    <ComponentBox>
      {/* 일정 시간이 지나면 자동으로 움직이는 Carousel */}
      <CarouselAutoMove />
      {/* 방향 버튼 존재하는 Carousel */}
      <CarouselMove />
    </ComponentBox>
  )
}
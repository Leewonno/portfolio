import { Outlet } from "react-router-dom"
import Header from "./nav/Header"
import Footer from "./nav/Footer"
import { ProjectProvider } from "./store/project-context"

export default function Main() {
  // Ver3
  // 1. 프로젝트 내용 정리 및 컴포넌트 페이지로 분리
  // 2. 배포된 프로젝트 강조
  // 3. 자기소개 컴포넌트 추가
  // 4. 스크롤에 따른 컴포넌트 별 애니메이션 추가
  // 5. css 파일 -> styled component 이용
  // 6. Header, Footer Version 별로 분리
  return (
    <>
      <ProjectProvider>
        <Header />
        <Outlet />
        <Footer />
      </ProjectProvider>
    </>
  )
}
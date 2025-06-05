import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.span`
  font-family: 'S-CoreDream-3Light';
  font-size: 16px;
  margin-bottom: 10px;
`

interface ComponentProps {
  children: ReactNode
}

// 프로젝트 종류 구분 -> 개인, 팀, 회사
export default function Division({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
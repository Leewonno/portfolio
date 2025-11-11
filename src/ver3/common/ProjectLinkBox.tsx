import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.div`
  display: flex;
  gap: 10px;
  background-color: #000000;
  border-radius: 25px;
  padding: 6px;
  width: fit-content;
`

interface ProjectLinkBoxProps {
  children: ReactNode
}

export default function ProjectLinkBox({ children }: ProjectLinkBoxProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
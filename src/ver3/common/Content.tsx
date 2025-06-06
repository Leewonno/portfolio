import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.div`
  font-family: 'S-CoreDream-3Light';
`

interface ComponentProps {
  children: ReactNode
}

export default function Content({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
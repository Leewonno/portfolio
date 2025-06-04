import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.span`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  font-size: 24px;
`

interface ComponentProps {
  children: ReactNode
}

export default function Title({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
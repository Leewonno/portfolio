import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.span`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
`

interface BoldProps {
  children: ReactNode
}

export default function Bold({ children }: BoldProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
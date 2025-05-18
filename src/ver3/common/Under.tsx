import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.span`
  text-decoration: underline;
`

interface UnderProps {
  children: ReactNode
}

export default function Under({ children }: UnderProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
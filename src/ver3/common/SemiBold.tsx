import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.span`
  font-family: 'S-CoreDream-3Light';
  font-weight: 600;
`

interface SemiBoldProps {
  children: ReactNode
}

export default function SemiBold({ children }: SemiBoldProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
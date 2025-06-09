import { ReactNode } from "react"
import styled from "styled-components"
import { media } from "../lib/styles/media"

const Component = styled.span`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  font-size: 24px;
  margin-bottom: 10px;

  ${media.phone`
    font-size: 20px;
    margin-bottom: 5px;
  `}
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
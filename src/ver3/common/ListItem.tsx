import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.li`
  list-style: circle;
  line-height: 1.6;
  font-size: 15px;
`

interface ComponentProps {
  children: ReactNode
}

export default function ListItem({ children }: ComponentProps) {
  return (
    <Component>
      {children}
    </Component>
  )
}
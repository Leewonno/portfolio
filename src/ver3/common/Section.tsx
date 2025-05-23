import styled from "styled-components"
import { media } from "../lib/styles/media"
import { ReactNode } from "react"

const Component = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  ${media.phone`
    padding: 20px;
  `}
`

interface SectionType {
  children: ReactNode;
}

export default function Section(props:SectionType) {
  const {children} = props;
  return (
    <Component>
      {children}
    </Component>
  )
}
import styled from "styled-components"
import { media } from "../lib/styles/media"
import React, { ReactNode } from "react"

const Component = styled.section`
  width: 1100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  ${media.phone`
    width: 100%;
    padding: 20px;
  `}
`

interface SectionType {
  children: ReactNode;
  style?: React.CSSProperties;
}

export default function Section(props: SectionType) {
  const { children, style } = props;
  return (
    <Component style={style}>
      {children}
    </Component>
  )
}
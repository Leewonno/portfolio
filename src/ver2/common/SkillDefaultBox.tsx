import { ReactNode } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    font-weight: 600;
    border-radius: 5px;
    background-color: #444444;
    padding: 6px;
    font-size: 15px;
  }

  img{
    height: 28px;
    cursor: pointer;
  }
`

interface skillType {
  children: ReactNode
}

export default function SkillDefaultBox(props: skillType) {
  const { children } = props;
  return (
    <Box>
      {children}
    </Box>
  )
}
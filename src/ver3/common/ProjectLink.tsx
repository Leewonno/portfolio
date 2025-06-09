import { ReactNode } from "react"
import styled from "styled-components"

const Component = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  box-sizing: border-box;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
  }
`

interface ProjectLinkProps {
  children: ReactNode;
  href: string;
  title?: string;
}

export default function ProjectLink({ children, href, title }: ProjectLinkProps) {
  return (
    <Component href={href} target="_blank" title={title}>
      {children}
    </Component>
  )
}
import { ReactNode } from "react";
import styled from "styled-components"

const Component = styled.div`
`

const RadioInput = styled.input`
  display: none;
`

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  font-family: 'S-CoreDream-3Light';

  ${RadioInput}:checked & {
    background-color: #f3f3f3;
  }
`

interface ComponentType {
  id: string;
  children: ReactNode;
  checked?: boolean;
  name: string;
}

export default function ProjectButton(props: ComponentType) {
  const { id, children, checked, name } = props;
  return (
    <Component>
      {/* 프로젝트 버튼 */}
      <InputLabel htmlFor={id}>{children}</InputLabel>
      <RadioInput id={id} name={name} defaultChecked={checked} type="radio" checked={checked} />
    </Component>
  )
}
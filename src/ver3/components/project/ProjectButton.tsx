import { ReactNode, useContext } from "react";
import styled from "styled-components"
import ProjectContext from "../../store/project-context";
import { ProjectKeyType } from "../../interface/project";

const Component = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
  cursor: inherit;
`

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #000000;
    color: #fff;
    font-family: 'S-CoreDream-7EXTRA_BOLD';
  }
`

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 20px;
  /* cursor: pointer; */
  user-select: none;
  font-family: 'S-CoreDream-3Light';
  font-weight: 600;
  cursor: inherit;
`

interface ComponentType {
  id: ProjectKeyType;
  children: ReactNode;
  checked?: boolean;
  name: string;
}

export default function ProjectButton(props: ComponentType) {
  const { id, children, checked, name } = props;
  const context = useContext(ProjectContext);
  const { setProject } = context;

  const handleClickButton = () => {
    setProject(id);
  }
  return (
    <Component>
      {/* 프로젝트 버튼 */}
      <RadioInput id={id} name={name} defaultChecked={checked} type="radio" />
      <InputLabel onClick={()=>handleClickButton()} htmlFor={id}>{children}</InputLabel>
    </Component>
  )
}
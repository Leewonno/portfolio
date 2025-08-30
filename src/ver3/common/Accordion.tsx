import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode, useEffect, useState } from "react"
import styled from "styled-components"

const Component = styled.div`
  width: 100%;
  padding: 0px 0px 15px 0px;
  box-sizing: border-box;
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  cursor: pointer;
`

const Title = styled.div`
  font-family: 'S-CoreDream-7EXTRA_BOLD';
`

const ButtonBox = styled.div`
`

const ContentBox = styled.div`
  width: 100%;
  padding-top: 10px;
`

const Content = styled.div`
  font-family: 'S-CoreDream-3Light';
  line-height: 1.5;
`

interface ComponentProps {
  children: ReactNode;
  title: string;
  open?: boolean;
}

export default function Accordion(props: ComponentProps) {
  const { title, children, open } = props
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(()=>{
    if (open) {
      setIsOpen(true)
    }
  }, [])
  const handleOpenClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Component>
      <TitleBox onClick={() => handleOpenClick()}>
        <Title>{title}</Title>
        <ButtonBox>
          {!isOpen ?
            <FontAwesomeIcon icon={faChevronDown} />
            :
            <FontAwesomeIcon icon={faChevronUp} />
          }
        </ButtonBox>
      </TitleBox>
      {isOpen ?
        <ContentBox>
          <Content>
            {children}
          </Content>
        </ContentBox>
        :
        <></>
      }
    </Component>
  )
}
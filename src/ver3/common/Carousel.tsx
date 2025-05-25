'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CarouselImagePropsType, CarouselImageType, projectData, ProjectKeyType } from "../interface/project";
import ProjectContext from "../store/project-context";

const ComponentBox = styled.div`
  width: 100%;
  position: relative;
`

const ViewBox = styled.div`
  width: 100%;
  height: 280px;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 10px;
`

const ImageBox = styled.div`
  width: 100%;
  display: flex;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const ManageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ArrowButton = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
`

const IndicatorBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  display: flex;
  gap: 10px;
  transform: translateX(-50%);
  padding: 10px;
`

const IndicatorButton = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #c6c6c6;
  box-shadow: 0px 0px 25px -5px #000;
  transition: all 0.5s;
  cursor: pointer;

  &:hover{
    background-color: #fff;
  }
`

interface CarouselType {
  project:ProjectKeyType; 
}

export default function Carousel(props:CarouselType) {
  const {project} = props;

  const carousel:CarouselImagePropsType = projectData[project]
  const carouselImages:CarouselImageType[] = carousel.data

  // const [carousel, setCarousel] = useState<CarouselImagePropsType>(projectData[project]);
  const [images, setImages] = useState<CarouselImageType[]>(carouselImages);

  const [url, setUrl] = useState<string>(carouselImages[0].url);
  const [index, setIndex] = useState<number>(0);

  useEffect(()=>{
    setImages(carouselImages);
    setUrl(carouselImages[0].url);
    setIndex(0);
  }, [project])

  const onBack = () => {
    let changeIndex = index - 1;
    if (changeIndex < 0) {
      changeIndex = images.length - 1;
    }
    setUrl(images[changeIndex].url)
    setIndex(changeIndex)
  }

  const onForward = () => {
    let changeIndex = index + 1;
    if (changeIndex === images.length) {
      changeIndex = 0;
    }
    setUrl(images[changeIndex].url)
    setIndex(changeIndex)
  }

  const onIndicator = (idx: number) => {
    setUrl(images[idx].url)
    setIndex(idx)
  }

  return (
    <ComponentBox>
      <ViewBox>
        <ImageBox>
          <Image src={url} alt={`carousel_image_${index}`} />
        </ImageBox>
      </ViewBox>
      {
        images.length > 1 ?
          <ManageBox>
            <ArrowButton onClick={onBack} style={{ left: 10 }}>
              <StyledFontAwesomeIcon icon={faChevronLeft} />
            </ArrowButton>
            <ArrowButton onClick={onForward} style={{ right: 10 }}>
              <StyledFontAwesomeIcon icon={faChevronRight} />
            </ArrowButton>
            <IndicatorBox>
              {images.map((value, idx) => {
                return (
                  <IndicatorButton onClick={() => onIndicator(idx)} key={idx} style={idx === index ? { backgroundColor: '#fff' } : {}} />
                )
              })}
            </IndicatorBox>
          </ManageBox>
          :
          <></>
      }
    </ComponentBox>
  )
}
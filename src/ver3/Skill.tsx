import styled from "styled-components"
import { media } from "./lib/styles/media";
import javascript from "../img/skills/javascript.png"
import typescript from "../img/skills/typescript.png"
import java from "../img/skills/java.png"
import cplus from "../img/skills/C++.png"
import python from "../img/skills/python.png"
import html5 from "../img/skills/html5.png"
import css from "../img/skills/css.png"
import react from "../img/skills/react.png"
import next from "../img/skills/nextjs.png"
import styledcomponent from "../img/skills/styledcomponent.png"
import recoil from "../img/skills/recoil.png"
import redux from "../img/skills/redux.png"
import jquery from "../img/skills/jquery.png"
import node from "../img/skills/node.png"
import nest from "../img/skills/nestjs.png"
import django from "../img/skills/django.png"
import firebase from "../img/skills/firebase.png"
import netlify from "../img/skills/netlify.png"
import vercel from "../img/skills/vercel.png"
import aws from "../img/skills/aws.png"
import mysql from "../img/skills/mysql.png"
import postgresql from "../img/skills/postgresql.png"
import nmixx from "../img/nmixx_gray.png"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

const LENS_RADIUS = 90;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  scroll-snap-align: start;
  overflow: hidden;
  cursor: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.phone`
    padding: 40px 20px;
    gap: 15px;
    flex-direction: column;
  `}
`

const SkillBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;

  ${media.phone`
    gap: 45px;
    flex-wrap: wrap;
  `}
`

const SkillImageBox = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  user-select: none;

  ${media.phone`
    width: 40px;
    height: 40px;
  `}
`

const SkillImage = styled.img`
  width: 80px;
  height: 80px;
  -webkit-filter: drop-shadow(0px 0px 5px #0000007b);
  filter: drop-shadow(0px 0px 5px #0000007b);

  ${media.phone`
    width: 40px;
    height: 40px;
  `}
`

const SkillImageText = styled.div`
  position: absolute;
  top: 90px;
  font-family: 'S-CoreDream-3Light';
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 6px #000000a8;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  ${media.phone`
    top: 50px;
    font-size: 12px;
  `}
`

const LensBox = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(0.1);
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.phone`
    gap: 45px;
    flex-wrap: wrap;
    filter: brightness(0.3);
  `}
`

const ZoomLayer = styled.div.attrs<{ x: number; y: number }>((props) => ({
  style: {
    WebkitMaskImage: `radial-gradient(
      circle ${LENS_RADIUS}px at ${props.x}px ${props.y}px, white 100%, transparent 100%
    )`,
    maskImage: `radial-gradient(
      circle ${LENS_RADIUS}px at ${props.x}px ${props.y}px, white 100%, transparent 100%
    )`,
  },
}))
  `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  box-sizing: 'border-box';

  ${media.phone`
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
  `}
`

const LensBorder = styled.div.attrs<{ x: number; y: number }>(props => ({
  style: {
    top: `${props.y}px`,
    left: `${props.x}px`,
  },
}))
  `
  position: absolute;
  width: ${LENS_RADIUS * 2}px;
  height: ${LENS_RADIUS * 2}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px solid #fff;
`

const FixedBackground = styled.img`
  position: fixed;
  top: 0;
  z-index: -1;
  /* transition: all 1s; */
  width: 100%;
  height: 100vh;
  filter: brightness(1.1);
  object-fit: cover;
`

const BlinkText = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  font-family: 'S-CoreDream-3Light';
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  animation: blink 2s infinite;
  cursor: pointer;

  @keyframes blink {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  ${media.phone`
    display: flex;
    gap: 10px;
  `}
`

export default function Skill() {
  const targetPosition = useRef({ x: -9999, y: -9999 });
  const [position, setPosition] = useState({ x: -9999, y: -9999 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setPosition(prev => {
        const newX = lerp(prev.x, targetPosition.current.x, 0.1);
        const newY = lerp(prev.y, targetPosition.current.y, 0.1);
        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Section ref={sectionRef}>
      <BlinkText>
        <FontAwesomeIcon icon={faHandPointer} />
        TOUCH
      </BlinkText>
      {/* 어두운 필터가 적용된 레이어 */}
      <LensBox>
        <SkillBox>
          <SkillImage src={javascript} title="javascript" />
          <SkillImage src={typescript} title="typescript" />
          <SkillImage src={python} title="python" />
          <SkillImage src={java} title="java" />
          <SkillImage src={cplus} title="C++" />
        </SkillBox>
        <SkillBox>
          <SkillImage src={react} title="react" />
          <SkillImage src={next} title="nextJs" />
          <SkillImage src={styledcomponent} title="styledcomponents" />
          <SkillImage src={recoil} title="recoil" />
          <SkillImage src={redux} title="redux" />
          <SkillImage src={html5} title="html5" />
          <SkillImage src={css} title="css" />
          <SkillImage src={jquery} title="jquery" />
        </SkillBox>
        <SkillBox>
          <SkillImage src={node} title="node" />
          <SkillImage src={nest} title="nestJs" />
          <SkillImage src={django} title="django" />
          <SkillImage src={firebase} title="firebase" />
          <SkillImage src={aws} title="aws" />
          <SkillImage src={netlify} title="netlify" />
          <SkillImage src={vercel} title="vercel" />
        </SkillBox>
        <SkillBox>
          <SkillImage src={mysql} title="mysql" />
          <SkillImage src={postgresql} title="postgreSQL" />
        </SkillBox>
      </LensBox>

      {/* 밝고 확대된 동일 콘텐츠 레이어 (돋보기) */}
      <ZoomLayer x={position.x} y={position.y}>
        {/* <BlinkText>Touch</BlinkText> */}
        <LensBox style={{ filter: 'none' }}>
          <SkillBox>
            <SkillImageBox>
              <SkillImage src={javascript} title="javascript" />
              <SkillImageText>JavaScript</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={typescript} title="typescript" />
              <SkillImageText>TypeScript</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={python} title="python" />
              <SkillImageText>Python</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={java} title="java" />
              <SkillImageText>Java</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={cplus} title="C++" />
              <SkillImageText>C++</SkillImageText>
            </SkillImageBox>
          </SkillBox>
          <SkillBox>
            <SkillImageBox>
              <SkillImage src={react} title="react" />
              <SkillImageText>React</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={next} title="nextJs" />
              <SkillImageText>Next.js</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={styledcomponent} title="styledcomponents" />
              <SkillImageText>Styled Components</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={recoil} title="recoil" />
              <SkillImageText>Recoil</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={redux} title="redux" />
              <SkillImageText>Redux</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={html5} title="html5" />
              <SkillImageText>HTML5</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={css} title="css" />
              <SkillImageText>CSS3</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={jquery} title="jquery" />
              <SkillImageText>JQuery</SkillImageText>
            </SkillImageBox>
          </SkillBox>
          <SkillBox>
            <SkillImageBox>
              <SkillImage src={node} title="node" />
              <SkillImageText>node.js</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={nest} title="nestJs" />
              <SkillImageText>NestJS</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={django} title="django" />
              <SkillImageText>Django</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={firebase} title="firebase" />
              <SkillImageText>Firebase</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={aws} title="aws" />
              <SkillImageText>AWS</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={netlify} title="netlify" />
              <SkillImageText>Netlify</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={vercel} title="vercel" />
              <SkillImageText>Vercel</SkillImageText>
            </SkillImageBox>
          </SkillBox>
          <SkillBox>
            <SkillImageBox>
              <SkillImage src={mysql} title="mysql" />
              <SkillImageText>MySQL</SkillImageText>
            </SkillImageBox>
            <SkillImageBox>
              <SkillImage src={postgresql} title="postgreSQL" />
              <SkillImageText>PostgreSQL</SkillImageText>
            </SkillImageBox>
          </SkillBox>
          <FixedBackground src={nmixx} alt="섹션1_배경" />
        </LensBox>
      </ZoomLayer>
      <LensBorder x={position.x} y={position.y} />
    </Section>
  )
}
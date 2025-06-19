import styled from "styled-components"
import useObserver from "./lib/hook/useObserver";
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

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  /* background-color: #fff; */
  scroll-snap-align: start;

  ${media.phone`
    padding: 20px;
    gap: 15px;
  `}
`

const SkillBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`

const SkillImage = styled.img`
  width: 80px;
  filter: brightness(0.3);
  user-select: none;
`

export default function Skill() {
  const { ref, animation } = useObserver();

  return (
    <Section>
      {/* 스킬 로고들 */}
      {/* 개발언어 */}
      <SkillBox>
        <SkillImage src={javascript} title="javascript" loading='lazy' />
        <SkillImage src={typescript} title="typescript" loading='lazy' />
        <SkillImage src={python} title="python" loading='lazy' />
        <SkillImage src={java} title="java" loading='lazy' />
        <SkillImage src={cplus} title="C++" loading='lazy' />
      </SkillBox>
      {/* 프론트엔드 */}
      <SkillBox>
        <SkillImage src={html5} title="html5" loading='lazy' />
        <SkillImage src={css} title="css" loading='lazy' />
        <SkillImage src={react} title="react" loading='lazy' />
        <SkillImage src={next} title="nextJs" loading='lazy' />
        <SkillImage src={styledcomponent} title="styledcomponent" loading='lazy' />
        <SkillImage src={recoil} title="recoil" loading='lazy' />
        <SkillImage src={redux} title="redux" loading='lazy' />
        <SkillImage src={jquery} title="jquery" loading='lazy' />
      </SkillBox>
      {/* 백엔드 */}
      <SkillBox>
        <SkillImage src={node} title="node" loading='lazy' />
        <SkillImage src={nest} title="nestJs" loading='lazy' />
        <SkillImage src={django} title="django" loading='lazy' />
        <SkillImage src={firebase} title="firebase" loading='lazy' />
        <SkillImage src={aws} title="aws" loading='lazy' />
        <SkillImage src={netlify} title="netlify" loading='lazy' />
        <SkillImage src={vercel} title="vercel" loading='lazy' />
      </SkillBox>
      {/* DB */}
      <SkillBox>
        <SkillImage src={mysql} title="mysql" loading='lazy' />
        <SkillImage src={postgresql} title="postgreSQL" loading='lazy' />
      </SkillBox>
    </Section>
  )
}
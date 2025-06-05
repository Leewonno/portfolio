import styled from "styled-components"

const Component = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`

const Skill = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`

const SkillImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 5px;
`

const Division = styled.div`
  background-color: #444444;
  width: 1px;
  height: 80%;  
`

const ContentBox = styled.div`
  font-family: 'S-CoreDream-3Light';
  position: absolute;
  display: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #333333c1;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  white-space: nowrap;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${Skill}:hover & {
    display: flex;
  }
`

interface SkillTypes {
  logo: string;
  content: string;
  color: string;
  division?: boolean;
}

interface ComponentProps {
  skill: SkillTypes[]
}

export default function SkillBox({ skill }: ComponentProps) {
  return (
    <Component>
      {
        skill.map((v, i) => {
          return (
            <Skill key={i}>
              <SkillImage src={`https://img.shields.io/badge/-${v.color}?style=flat&logo=${v.logo}&logoColor=white`} alt={`${v.logo}`} />
              {v.division ?
                <Division />
                :
                <></>
              }
              <ContentBox>
                {v.content}
              </ContentBox>
            </Skill>
          )
        })
      }
    </Component>
  )
}
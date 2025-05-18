import { useEffect, useState } from "react"
import style from "../../css/newMain.module.css";
import novelcut from "../../img/novelcut.png";
import manogz from "../../img/mangoz.png";
import lebu from "../../img/lebu.png";
import novelpedia from "../../img/novelpedia.png";
import portfolio from "../../img/portfolio.png";
import demure from "../../img/demure.png";
// import bumil from "../../img/bumil.png";

export default function MainProjectDetail(props: any) {

  const projectData = {
    // bumil: {
    //   mainImg: bumil,
    //   title: "범일운수 ERP 프로젝트",
    //   outline: "범일운수 ERP 프로젝트입니다. 선입선출 로직을 이용해 자재관리 모듈 개발에 참여했습니다.",
    //   skill: [
    //     {
    //       src: "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
    //       alt: "Django",
    //     },
    //     {
    //       src: "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
    //       alt: "Python",
    //     },
    //     {
    //       src: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
    //       alt: "AWS",
    //     },
    //     {
    //       src: "https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
    //       alt: "JavaScript",
    //     },
    //     {
    //       src: "https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=jquery&logoColor=white",
    //       alt: "JQuery",
    //     }
    //   ],
    //   role: [
    //     "자재관리 모듈 개발",
    //     "(자재) 입고, 출고, 단가조회",
    //     "(자재) 바코드 출력 및 출고",
    //     "식단관리 모듈 개발",
    //     "점검정비 모듈 개발",
    //   ]
    // },
    portfolio: {
      mainImg: portfolio,
      title: "포트폴리오",
      outline: "포트폴리오 사이트입니다. 자기 소개, 사용 가능 기술, 진행한 프로젝트 내용을 확인할 수 있습니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
          alt: "React",
        },
        {
          src: "https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white",
          alt: "TYPE",
        },
        {
          src: "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white",
          alt: "firebase",
        }
      ],
      role: [
        "프로젝트 전체 기획 및 개발",
        "React-Modal 라이브러리를 이용한 모달창 제작",
        "Firebase를 이용한 배포"
      ]
    },
    demure: {
      mainImg: demure,
      title: "Demure",
      outline: "이케아(IKEA) 데이터를 활용한 가구 쇼핑몰 입니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
          alt: "React",
        },
        {
          src: "https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white",
          alt: "TYPE",
        },
        {
          src: "https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white",
          alt: "NestJs",
        },
        {
          src: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
          alt: "aws",
        },
        {
          src: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white",
          alt: "PostgreSQL",
        }
      ],
      role: [
        "프로젝트 전체 기획 및 리딩",
        "NodeMailer를 이용한 이메일 인증",
        "JWT, Bcrypt를 이용한 회원가입 및 인증",
        "Redux-Toolkit을 이용한 전역 상태 관리",
        "Kakao 소셜 로그인",
        "AWS EC2를 통한 배포",
        "쿠폰 발급 및 사용",
      ]
    },
    novelcut: {
      mainImg: novelcut,
      title: "NOVELCUT",
      outline: "컷툰처럼 새로운 보기 방식을 적용한 웹소설 연재 사이트입니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
          alt: "React",
        },
        {
          src: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
          alt: "NodeJs",
        },
        {
          src: "https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white",
          alt: "mysql",
        },
      ],
      role: [
        "프로젝트 전체 기획 및 개발",
        "useContext Hook을 이용한 전역 상태를 관리",
        "JWT, Bcrypt를 이용한 회원가입 및 인증",
        "CLOUDTYPE을 이용한 배포"
      ]
    },
    mangoz: {
      mainImg: manogz,
      title: "MangoZ",
      outline: "음악 스트리밍 사이트입니다. 템플릿 엔진으로 EJS를 이용했습니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
          alt: "HTML",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
          alt: "CSS",
        },
        {
          src: "https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
          alt: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
          alt: "NodeJs",
        },
        {
          src: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
          alt: "aws",
        },
        {
          src: "https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white",
          alt: "mysql",
        },
      ],
      role: [
        "JQuery를 이용한 SPA구조화",
        "Multer를 이용한 AWS S3 이미지 업로드",
        "드로그 앤 드랍으로 플레이리스트 곡 순서 변경",
        "Node.js를 이용한 음악 스트리밍",
        "Socket.io를 이용한 채팅방 구현",
        "AWS를 통한 배포",
      ]
    },
    lebu: {
      mainImg: lebu,
      title: "LEBU",
      outline: "HTML, CSS, JavaScript를 이용한 부산 관광 정보 사이트입니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
          alt: "HTML",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
          alt: "CSS",
        },
        {
          src: "https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
          alt: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white",
          alt: "Netlify",
        },
      ],
      role: [
        "메인페이지, Map 태그를 이용한 이미지 영역 분할",
        "기상청 오픈 API를 이용한 날씨 데이터 가져오기",
        "Netlify를 이용한 배포",
      ]
    },
    novelpedia: {
      mainImg: novelpedia,
      title: "NOVELPEDIA",
      outline: "소설 및 만화 정보를 공유할 수 있는 위키 서비스 입니다. Scikit-Learn 라이브러리를 이용한 작품 추천 서비스(아이템 기반 협업 필터링)를 제공합니다.",
      skill: [
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
          alt: "HTML",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
          alt: "CSS",
        },
        {
          src: "https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
          alt: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
          alt: "aws",
        },
        {
          src: "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white",
          alt: "firebase",
        },
        {
          src: "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
          alt: "Python",
        },
      ],
      role: [
        "프로젝트 전체 기획 및 리딩",
        "AWS Lambda를 이용한 추천 알고리즘(아이템 기반 협업 필터링) 동작",
        "Python을 이용한 추천 알고리즘 개발",
        "작품, 작가, 출판사 역사 페이지 데이터 관리",
        "Firebase를 이용한 로그인/회원가입",
        "Firebase를 이용한 배포",
      ]
    },
  }

  const [item, setItem] = useState<any>(projectData.portfolio)



  useEffect(() => {

    if (props.project === "portfolio") {
      setItem(projectData.portfolio)
    }
    else if (props.project === "demure") {
      setItem(projectData.demure)
    }
    else if (props.project === "novelcut") {
      setItem(projectData.novelcut)
    }
    else if (props.project === "mangoz") {
      setItem(projectData.mangoz)
    }
    else if (props.project === "lebu") {
      setItem(projectData.lebu)
    }
    else if (props.project === "novelpedia") {
      setItem(projectData.novelpedia)
    }
    // else if (props.project === "bumil") {
    //   setItem(projectData.bumil)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.project])

  return <>
    <div className={style.modalBox}>
      <div className={style.modalProjectBox}>
        <div className={style.modalProjectImg}>
          <img src={item.mainImg} alt={"이미지"} className={style.modalProjectImgContent} />
        </div>
        <div className={style.modalProjectTitle}>{item.title}</div>
        <div className={style.modalProjectOutline}>
          <div className={style.modalProjectOutlineTitle}>
            개요
          </div>
          <div className={style.modalProjectOutlineContent}>
            {item.outline}
          </div>
        </div>
        <div className={style.modalProjectSkill}>
          <div className={style.modalProjectSkillTitle}>사용 기술</div>
          <div className={style.modalProjectSkillContent}>
            {item.skill.map((value: any, index: number) => {
              return (
                <img src={value.src} alt={value.alt} className={style.modalSkillImg} key={index} />
              )
            })}

          </div>
        </div>
        <div className={style.modalProjectMy}>
          <div className={style.modalProjectMyTitle}>
            담당 및 역할
          </div>
          {item.role.map((value: string, index: number) => {
            return (
              <li className={style.modalProjectMyContent} key={index}>
                {value}
              </li>
            )
          })}
        </div>
      </div>
    </div>
  </>
}
import { useEffect, useState } from "react"
import main from "../css/main.module.css"
import novelcut from "../img/novelcut.png";
import manogz from "../img/mangoz.png";
import lebu from "../img/lebu.png";
import novelpedia from "../img/novelpedia.png";
import portfolio from "../img/portfolio.png";
import demure from "../img/demure.png";
import bumil from "../img/bumil.png";

export default function MainProjectDetail(props:any){

    const projectData = {
        bumil:{
            mainImg:bumil,
            title:"범일운수 ERP 프로젝트",
            outline:"범일운수 ERP 프로젝트입니다. 선입선출 로직을 이용해 자재관리 모듈 개발에 참여했습니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
                    alt:"Django",
                },
                {
                    src:"https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white",
                    alt:"AWS",
                },
                {
                    src:"https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white",
                    alt:"JQuery",
                }
            ],
            role:[
                "자재관리 모듈 개발",
                "식단관리 모듈 개발",
                "점검정비 모듈 개발",
            ]
        },
        portfolio:{
            mainImg:portfolio,
            title:"포트폴리오",
            outline:"포트폴리오 사이트입니다. HOME, 자기소개, 기술, 프로젝트 4가지 Section으로 만들었고, 우측 상단에 줄을 잡아 당기면 불이 켜지는 효과를 느낄 수 있도록 했습니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
                    alt:"React",
                },
                {
                    src:"https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white",
                    alt:"TYPE",
                },
                {
                    src:"https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white",
                    alt:"firebase",
                }
            ],
            role:[
                "프로젝트 전체 기획 및 개발",

            ]
        },
        demure:{
            mainImg:demure,
            title:"Demure",
            outline:"이케아(IKEA) 데이터를 활용한 가구 쇼핑몰 입니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
                    alt:"React",
                },
                {
                    src:"https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white",
                    alt:"TYPE",
                },
                {
                    src:"https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white",
                    alt:"NestJs",
                },
                {
                    src:"https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
                    alt:"aws",
                },
                {
                    src:"https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white",
                    alt:"PostgreSQL",
                }
            ],
            role:[
                "NodeMailer를 이용한 이메일 인증",
                "JWT, Bcrypt를 이용한 회원가입"
            ]
        },
        novelcut:{
            mainImg:novelcut,
            title:"NOVELCUT",
            outline:"컷툰처럼 새로운 보기 방식을 적용한 웹소설 연재 사이트입니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
                    alt:"React",
                },
                {
                    src:"https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
                    alt:"NodeJs",
                },
                {
                    src:"https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white",
                    alt:"mysql",
                },
            ],
            role:[
                "프로젝트 전체 기획 및 개발",
            ]
        },
        mangoz:{
            mainImg:manogz,
            title:"MangoZ",
            outline:"음악 스트리밍 사이트입니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
                    alt:"HTML",
                },
                {
                    src:"https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
                    alt:"CSS",
                },
                {
                    src:"https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
                    alt:"JavaScript",
                },
                {
                    src:"https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
                    alt:"NodeJs",
                },
                {
                    src:"https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
                    alt:"aws",
                },
                {
                    src:"https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white",
                    alt:"mysql",
                },
            ],
            role:[
                "JQuery를 이용한 SPA구조화",
                "마이페이지",
                "곡 정보 페이지",
                "곡 플레이리스트에 추가",
                "플레이리스트 곡 순서 드로그 앤 드랍으로 변경",
                "플레이리스트 곡 재생",
                "Node.js를 이용한 음악 스트리밍",
                "AWS를 통한 배포",
            ]
        },
        lebu:{
            mainImg:lebu,
            title:"LEBU",
            outline:"HTML, CSS, JavaScript를 이용한 부산 관광 정보 사이트입니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
                    alt:"HTML",
                },
                {
                    src:"https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
                    alt:"CSS",
                },
                {
                    src:"https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
                    alt:"JavaScript",
                },
                {
                    src:"https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white",
                    alt:"Netlify",
                },
            ],
            role:[
                "메인페이지 애니메이션",
                "메인페이지, Map 태그를 이용한 이미지 영역 분할",
                "기상청 오픈 API를 이용한 날씨 데이터 가져오기",
                "헤더, 푸터 디자인",
                "Netlify를 이용한 배포",
            ]
        },
        novelpedia:{
            mainImg:novelpedia,
            title:"NOVELPEDIA",
            outline:"소설 및 만화 정보를 공유할 수 있는 위키 서비스 입니다. Scikit-Learn 라이브러리를 이용한 작품 추천 서비스를 제공합니다.",
            skill:[
                {
                    src:"https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
                    alt:"HTML",
                },
                {
                    src:"https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white",
                    alt:"CSS",
                },
                {
                    src:"https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white",
                    alt:"JavaScript",
                },
                {
                    src:"https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
                    alt:"aws",
                },
                {
                    src:"https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white",
                    alt:"firebase",
                },
                {
                    src:"https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
                    alt:"Python",
                },
            ],
            role:[
                "프로젝트 전체 기획",
                "AWS Lambda를 이용한 추천 알고리즘 동작",
                "Python을 이용한 추천 알고리즘 개발",
                "메인페이지 디자인 및 기능 개발",
                "작품, 작가, 출판사 페이지 디자인 및 기능 개발",
                "편집, 역사 페이지 디자인 및 기능 개발",
                "Firebase를 이용한 로그인/회원가입",
                "Firebase를 이용한 배포",
            ]
        },
    }

    const [item, setItem] = useState<any>(projectData.portfolio)

    

    useEffect(()=>{

        if(props.project === "portfolio"){
            setItem(projectData.portfolio)
        }
        else if(props.project === "demure"){
            setItem(projectData.demure)
        }
        else if(props.project === "novelcut"){
            setItem(projectData.novelcut)
        }
        else if(props.project === "mangoz"){
            setItem(projectData.mangoz)
        }
        else if(props.project === "lebu"){
            setItem(projectData.lebu)
        }
        else if(props.project === "novelpedia"){
            setItem(projectData.novelpedia)
        }
        
    }, [props.project])

    return <>
        <div className={main.modalBox}>
            <div className={main.modalProjectBox}>
                <div className={main.modalProjectImg}>
                    <img src={item.mainImg} alt={"이미지"} className={main.modalProjectImgContent}/>
                </div>
                <div className={main.modalProjectTitle}>{item.title}</div>
                <div className={main.modalProjectOutline}>
                    <div className={main.modalProjectOutlineTitle}>
                        개요
                    </div>
                    <div className={main.modalProjectOutlineContent}>
                        {item.outline}
                    </div>
                </div>
                <div className={main.modalProjectSkill}>
                    <div className={main.modalProjectSkillTitle}>사용 기슬</div>
                    <div className={main.modalProjectSkillContent}>
                        {item.skill.map((value:any, index:number)=>{
                            return (
                                <img src={value.src} alt={value.alt} className={main.modalSkillImg} key={index}/>
                            )
                        })}
                        
                    </div>
                </div>
                <div className={main.modalProjectMy}>
                    <div className={main.modalProjectMyTitle}>
                        담당 및 역할
                    </div>
                    {item.role.map((value:string, index:number)=>{
                        return(
                            <li className={main.modalProjectMyContent} key={index}>
                                {value}
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}
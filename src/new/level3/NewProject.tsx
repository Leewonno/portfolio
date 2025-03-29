import style from "../../css/newMain.module.css";
import novelcut from "../../img/novelcut.png";
import manogz from "../../img/mangoz.png";
import lebu from "../../img/lebu.png";
import novelpedia from "../../img/novelpedia.png";
import portfolio from "../../img/portfolio.png";
import demure from "../../img/demure.png";
import bumil from "../../img/bumil.png";
import wenmixx from "../../img/we-nmixx.png"
import Modal from "react-modal";
import MainProjectDetail from "../level2/NewProjectDetail";
import { useState } from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillDefaultBox from "../common/SkillDefaultBox";

export default function NewProject() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 3,
    },
    content: {
      margin: "auto",
      maxWidth: "600px",
      height: "600px",
      padding: "25px",
      overflow: "scroll",
      borderRadius: "0px"
    },
  };

  const handleProjectDetatil = (project: string) => {
    setProjectName(project)
    setIsOpen(true);
  }

  return (
    <>
      <section id="project" className={style.project}>
        <div className={style.projectBox}>
          <div className={style.projectName}><FontAwesomeIcon icon={faPaperclip} /> PROJECTS</div>
          {/* <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={bumil} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("bumil")}>자세히</div>
              <div className={style.projectTitle}>범일운수 ERP 프로젝트</div>
              <div className={style.projectType}>회사 프로젝트</div>
              <div className={style.projectDesc}>
                범일운수 ERP 프로젝트 입니다.
                <span className={style.projectDescStrong}> 자재관리</span><span> 모듈 개발에 참여했습니다.</span>
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>2024.04 ~ 2024.11</span>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>배차, 급여, 자재, 정비, 회계 관리</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Django_Templates-092E20?style=flat&logo=django&logoColor=white" alt="Django Templates" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django" />
                  </SkillDefaultBox>
                </div>
              </div>
            </div>
          </div> */}
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={wenmixx} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              {/* <div className={style.projectDetail} onClick={() => handleProjectDetatil("we-nmixx")}>자세히</div> */}
              <div className={style.projectTitle}>엔믹스 팬 커뮤니티, WE-NMIXX</div>
              <div className={style.projectType}>팀 프로젝트</div>
              <div className={style.projectDesc}>
                K-POP 걸그룹 NMIXX 팬 커뮤니티 제작 프로젝트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}> Next.js + NestJS</span>를 이용해 현재 <span className={style.projectDescStrong}>개발 중인</span> 프로젝트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>2023.12 ~ (진행 중)</span>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>커뮤니티 게시판</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white" alt="recoil" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJs" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/nmixxfans">https://github.com/nmixxfans</a></div>
              </div>
              {/* <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="">X</a></div>
              </div> */}
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={portfolio} className={style.pjImg} alt="pj_img" />
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("portfolio")}>자세히</div>
              <div className={style.projectTitle}>포트폴리오</div>
              <div className={style.projectType}>개인 프로젝트</div>
              <div className={style.projectDesc}>
                포트폴리오 사이트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}> React + TypeScript</span>를 이용해 개발했고, <span className={style.projectDescStrong}>react-modal</span> 라이브러리를 이용해 모달창에서 프로젝트 내용을 자세히 보도록 제작했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>Firebase Hosting</span>을 이용해 배포했습니다.
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>프로젝트 소개</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/Leewonno/portfolio">https://github.com/Leewonno/portfolio</a></div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://portfolio-67029.web.app/">https://portfolio-67029.web.app/</a></div>
              </div>
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={demure} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("demure")}>자세히</div>
              <div className={style.projectTitle}>가구 쇼핑몰, Demure</div>
              <div className={style.projectType}>팀 프로젝트</div>
              <div className={style.projectDesc}>
                이케아(IKEA) 데이터를 활용한 가구 쇼핑몰 입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}> React + TypeScript</span> 를 이용해 프론트를,
                <span className={style.projectDescStrong}> NestJs</span> 를 이용해 백을 개발했습니다.
                <span className={style.br}></span>
                프론트와 백엔드 모두 <span className={style.projectDescStrong}>TypeScript</span> 를 이용한 첫 프로젝트라 타입지정, TypeScript용 라이브러리 필요 등 많은 문제와 부딪혔지만, TypeScript의 필요성을 느낄 수 있었던 프로젝트였습니다.
                <span className={style.br}></span>
                전역 상태 관리를 위해 <span className={style.projectDescStrong}>Redux-Toolkit</span> 을 이용했고,
                <span className={style.projectDescStrong}> NodeMailer</span> 라이브러리를 이용한 메일 인증을 구현했습니다.
                <span className={style.br}></span>
                간편한 로그인을 위해 <span className={style.projectDescStrong}>Kakao 소셜 로그인</span>을 추가했습니다.
                <span className={style.br}></span>
                프론트와 백 모두 <span className={style.projectDescStrong}>AWS EC2</span>를 통해 배포했습니다.
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>
                  상품 목록 보기(무한 스크롤),
                  이메일 인증,
                  카카오 소셜 로그인,
                  상품 색상 검색,
                  쿠폰 발급 및 사용
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJs" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=flat&logo=amazonec2&logoColor=white" alt="aws_ec2" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_RDS-527FFF?style=flat&logo=amazonrds&logoColor=white" alt="aws_rds" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_S3-569A31?style=flat&logo=amazons3&logoColor=white" alt="aws_s3" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Database</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/KDT9Demure">https://github.com/KDT9Demure</a></div>
              </div>
              {/* <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://demure2023.shop/">https://demure2023.shop/</a></div>
              </div> */}
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={novelcut} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("novelcut")}>자세히</div>
              <div className={style.projectTitle}>웹소설 연재 사이트, NOVELCUT</div>
              <div className={style.projectType}>개인 프로젝트</div>
              <div className={style.projectDesc}>
                컷툰처럼 새로운 보기 방식을 적용한 웹소설 연재 사이트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>React</span>를 이용해 프론트를, <span className={style.projectDescStrong}>Node.js</span>를 이용해 백을 개발했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>React</span>를 이용한 첫 프로젝트라 어려움이 있었지만, React에서 제공하는 Hook의 편리함을 느끼게 된 프로젝트였습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>useContext</span> Hook을 이용해 전역 상태를 관리했고, <span className={style.projectDescStrong}>CloudType</span>을 이용해 배포했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>Hosting, DB 비용 절약을 위해 배포되어있는 사이트는 Firebase의 Firestore, Authentication, Storage, Hosting을 이용해 다시 개발했습니다.</span>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>웹소설 생성, 연재, 검색, 웹소설을 보기 위한 슬라이드보드, 회원가입(JWT/Bcrypt)</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Nodejs" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <span>CloudType</span>
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Database</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/Leewonno/project3">https://github.com/Leewonno/project3</a></div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://novelcut-1f6f2.web.app/">https://novelcut-1f6f2.web.app/</a></div>
              </div>
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={manogz} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("mangoz")}>자세히</div>
              <div className={style.projectTitle}>음악 스트리밍 사이트, MangoZ</div>
              <div className={style.projectType}>팀 프로젝트</div>
              <div className={style.projectDesc}>
                음악 스트리밍 사이트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>Node.js</span>를 이용한 첫 프로젝트였습니다. 템플릿 엔진으로 <span className={style.projectDescStrong}>EJS</span>를 이용했습니다. 백 서버를 직접 구현하고 배포해보면서 클라이언트와 서버간 데이터를 주고 받는 과정을 배울 수 있었습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>Node.js Stream</span>을 이용해 음악 스트리밍 서비스를 구현했고, <span className={style.projectDescStrong}>Socket.io</span>를 이용해 아티스트 이야기를 나눌 수 있는 채팅방을 구현했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>AWS S3</span> 스토리지에 파일을 저장했고, 파일 업로드에 <span className={style.projectDescStrong}>Multer</span>를 이용했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>AWS EC2</span>를 통해 배포했습니다.
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>음악 스트리밍, 플레이리스트 생성, 재생 순서 변경(Drog & Drop), 채팅방(Socket.io), 회원가입(JWT/Bcrypt)</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Nodejs" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=flat&logo=amazonec2&logoColor=white" alt="aws_ec2" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_RDS-527FFF?style=flat&logo=amazonrds&logoColor=white" alt="aws_rds" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_S3-569A31?style=flat&logo=amazons3&logoColor=white" alt="aws_s3" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Database</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/Leewonno/project2">https://github.com/Leewonno/project2</a></div>
              </div>
              {/* <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="" style={{ textDecoration: "line-through" }}>배포 중단</a></div>
              </div> */}
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={lebu} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("lebu")}>자세히</div>
              <div className={style.projectTitle}>부산 관광 정보 사이트, LEBU</div>
              <div className={style.projectType}>팀 프로젝트</div>
              <div className={style.projectDesc}>
                부산 관광 정보 사이트입니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>HTML, CSS, JavaScript</span>를 이용해 개발을 진행했습니다.
                <span className={style.br}></span>
                관광지 정보를 확인할 수 있는 페이지가 있고, 근처 식당 정보를 모달창에서 확인할 수 있습니다. 모달창에 슬라이드 보드를 구현해 이미지를 볼 수 있게 했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>기상청 API</span>를 이용해 부산 지역의 날씨 정보를 제공합니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>Netlify</span>를 이용해 배포했습니다.
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>관광지, 주변 식당 정보 제공, 부산 지역 날씨 확인, 영어, 중국어 번역</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white" alt="Netlify" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/Leewonno/project1">https://github.com/Leewonno/project1</a></div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://poetic-druid-deac2a.netlify.app/">https://poetic-druid-deac2a.netlify.app/</a></div>
              </div>
            </div>
          </div>
          <div className={style.projectItem}>
            <div className={style.projectImg}>
              <img src={novelpedia} className={style.pjImg} alt="pj_img"></img>
            </div>
            <div className={style.projectInfo}>
              <div className={style.projectDetail} onClick={() => handleProjectDetatil("novelpedia")}>자세히</div>
              <div className={style.projectTitle}>소설 만화 리뷰 사이트, NOVELPEDIA</div>
              <div className={style.projectType}>팀 프로젝트</div>
              <div className={style.projectDesc}>
                소설 및 만화 정보를 공유할 수 있는 <span className={style.projectDescStrong}>위키 서비스</span> 입니다. <span className={style.projectDescStrong}>Scikit-Learn</span> 라이브러리를 이용한 작품 추천 서비스(아이템 기반 협업 필터링)를 제공합니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>HTML, CSS, JavaScript</span>를 이용해 개발을 진행했습니다.
                <span className={style.br}></span>
                <span className={style.projectDescStrong}>AWS Lambda</span> 서비스를 이용해 작품 추천 서비스를 동작시켰습니다.
                <span className={style.br}></span>
                DB는 <span className={style.projectDescStrong}>Firebase Cloud Firestore</span>를 이용했고, <span className={style.projectDescStrong}>Firebase Hosting</span>을 통해 배포했습니다.
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>주요기능</div>
                <div className={style.projectContent}>작품 정보 페이지 생성 및 수정, 수정된 데이터 역사 페이지에 저장, 좋아요, 작품 추천 서비스, 로그인, 회원가입(Firebase Authentication)</div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Frontend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Backend</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat&logo=awslambda&logoColor=white" alt="awslambda" />
                  </SkillDefaultBox>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="python" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Database</div>
                <div className={style.projectContent}>
                  <SkillDefaultBox>
                    <img src="https://img.shields.io/badge/Firebase_Cloud_Firestore-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase_db" />
                  </SkillDefaultBox>
                </div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>Github</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://github.com/novelpedia/graduation">https://github.com/novelpedia/graduation</a></div>
              </div>
              <div className={style.projectSet}>
                <div className={style.projectCategory}>URL</div>
                <div className={style.projectContent}><a className={style.projectA} target="_blank" rel="noreferrer" href="https://novelpedia.co.kr/">https://novelpedia.co.kr/</a></div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles} onRequestClose={() => setIsOpen(false)}>
          <MainProjectDetail project={projectName}></MainProjectDetail>
        </Modal>
      </section>
    </>
  )
}
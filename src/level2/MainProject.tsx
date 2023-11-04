import { useContext, useEffect, useState } from "react";
import StatusContext from "../store/status-context";

import main from "../css/main.module.css";
import novelcut from "../img/novelcut.png";
import manogz from "../img/mangoz.png";
import lebu from "../img/lebu.png";
import novelpedia from "../img/novelpedia.png";
import portfolio from "../img/portfolio.png";

export default function MainProject(){

    const [styleThema, setStyleThema]  = useState({});
    const context = useContext(StatusContext);

    useEffect(()=>{
        if(context.light==="on"){
            setStyleThema(thema);

        }
        else{
            setStyleThema({});
        }
    },[context.light]);

    const thema={
        opacity:1,
    }

    return(
        <>
            <section id="project" className={main.project}>
                <div className={main.projectBox}>
                    <div className={main.projectName} style={styleThema}>PROJECT</div>
                    {/* <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={novelcut} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>NMIXX FanPage</div>
                            <div className={main.projectDesc}>세계적인 걸그룹 NMIXX의 팬 페이지 입니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>엔믹스, 멤버들에 대한 소개, 팬튜브 정보 제공</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>React, TypeScript</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>Node.js</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Database</div>
                                <div className={main.projectContent}>MySQL</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/Leewonno/project3">https://github.com/Leewonno/project3</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://web-novelcut-12fhqa2blnvnggha.sel5.cloudtype.app/">https://web-novelcut-12fhqa2blnvnggha.sel5.cloudtype.app/</a></div>
                            </div>
                        </div>
                    </div> */}
                    <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={portfolio} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>포트폴리오</div>
                            <div className={main.projectDesc}>포트폴리오 사이트입니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>자기 소개 및 프로젝트 소개</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>React, TypeScript</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>CloudType</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/Leewonno/portfolio">https://github.com/Leewonno/portfolio</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://web-portfolio-12fhqa2llocnq9ai.sel5.cloudtype.app/">https://web-portfolio-12fhqa2llocnq9ai.sel5.cloudtype.app/</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={novelcut} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>NOVELCUT</div>
                            <div className={main.projectDesc}>컷툰처럼 새로운 보기 방식을 적용한 웹소설 연재 사이트입니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>웹소설 생성, 웹소설 연재, 웹소설 검색, 웹소설 보기, 로그인, 회원가입</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>React</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>Node.js, CloudType</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Database</div>
                                <div className={main.projectContent}>MySQL</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/Leewonno/project3">https://github.com/Leewonno/project3</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://web-novelcut-12fhqa2blnvnggha.sel5.cloudtype.app/">https://web-novelcut-12fhqa2blnvnggha.sel5.cloudtype.app/</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={manogz} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>MangoZ</div>
                            <div className={main.projectDesc}>음악 스트리밍 사이트입니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>음악 스트리밍, 플레이리스트 생성, 음악 검색, 음악 좋아요, 플레이리스트 좋아요, 프로필 수정, 로그인, 회원가입</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>HTML, CSS, JavaScript</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>Node.js, AWS</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Database</div>
                                <div className={main.projectContent}>MySQL</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/Leewonno/project2">https://github.com/Leewonno/project2</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="http://13.238.96.99/">http://13.238.96.99/</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={lebu} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>LEBU</div>
                            <div className={main.projectDesc}>부산 관광 정보 사이트입니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>관광지, 주변 식당 정보 제공, 영어, 중국어 번역</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>HTML, CSS, JavaScript</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>Netlify</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/Leewonno/project1">https://github.com/Leewonno/project1</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://poetic-druid-deac2a.netlify.app/">https://poetic-druid-deac2a.netlify.app/</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.projectItem} style={styleThema}>
                        <div className={main.projectImg}>
                            <img src={novelpedia} className={main.pjImg}></img>
                        </div>
                        <div className={main.projectInfo}>
                            <div className={main.projectTitle}>NOVELPEDIA</div>
                            <div className={main.projectDesc}>소설 및 만화 정보를 공유할 수 있는 위키 서비스 입니다. Scikit-Learn 라이브러리를 이용한 작품 추천 서비스를 제공합니다.</div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>주요기능</div>
                                <div className={main.projectContent}>작품, 작가, 출판사 정보 생성 및 수정, 역사 페이지, 좋아요, 작품 추천 서비스, 로그인, 회원가입</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Frontend</div>
                                <div className={main.projectContent}>HTML, CSS, JavaScript</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Backend</div>
                                <div className={main.projectContent}>Firebase</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Database</div>
                                <div className={main.projectContent}>Firebase Cloud Firestore</div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>Github</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://github.com/novelpedia/graduation">https://github.com/novelpedia/graduation</a></div>
                            </div>
                            <div className={main.projectSet}>
                                <div className={main.projectCategory}>URL</div>
                                <div className={main.projectContent}><a className={main.projectA} target="_blank" href="https://novelpedia.co.kr/">https://novelpedia.co.kr/</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
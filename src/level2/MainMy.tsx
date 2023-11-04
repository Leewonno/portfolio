import { useContext, useEffect, useState } from "react";
import StatusContext from "../store/status-context";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import main from "../css/main.module.css";
import profileImg from "../img/lee.jpg";
import lantern1 from "../img/lantern1.png";
import lantern2 from "../img/lantern2.png";
import lantern3 from "../img/lantern3.png";
import lantern4 from "../img/lantern4.png";
 

export default function MainMy(){

    const [styleThema, setStyleThema]  = useState({});
    const [styleThema2, setStyleThema2] = useState({});
    const [styleThema3, setStyleThema3] = useState({});
    const context = useContext(StatusContext);

    useEffect(()=>{
        if(context.light==="on"){
            if(width>640){
                setStyleThema(thema);
            }
            setStyleThema2(thema2);
            setStyleThema3(thema3);
        }
        else{
            setStyleThema(none);
            setStyleThema2({});
            setStyleThema3({});
        }
    },[context.light]);

    const thema={
        display:"block",
    }
    const none={
        display:"none",
    }

    const thema2 = {
        color:"white"
    }

    const thema3 = {
        opacity:1,
    }

    const [width, setWidth] = useState<number>(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            if(width<=640){
                setStyleThema(none);
            }
            else{
                if(context.light==="on"){
                    setStyleThema(thema);
                }
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return(
        <>
            <section className={main.my} id="my">
                <div className={main.myBox}>
                    <div className={main.aboutMe} style={styleThema3}>ABOUT ME</div>
                    <div className={main.infoBox} style={styleThema3}>
                        <div className={main.imgBox}>
                            <img className={main.profileImg} src={profileImg} alt="프로필 이미지"></img>
                        </div>
                        <div className={main.info}>
                            <div className={main.nameBox}>
                                <div className={main.name}>Leewonno</div>
                            </div>
                            <div className={main.infoName}>학력</div>
                            <div className={main.infoItemBox}>
                                <div>- 서산 서일고등학교</div>
                                <div>- 남서울대학교 컴퓨터소프트웨어학과 2024.02 (졸업예정)</div>
                            </div>
                            <div className={main.infoName}>참여활동</div>
                            <div className={main.infoItemBox}>
                                <div>- 남서울대학교 제 27회 졸업작품 전시회 (2023.06)</div>
                                <div>- 포스코 X 코딩온 웹 풀스택 부트캠프 9기 (2023.07~2023.12)</div>
                            </div>
                            <div className={main.infoName} style={styleThema2}>Email</div>
                            <div className={main.infoItemBox}>
                                <div>- dldnjssh123@naver.com</div>
                            </div>
                            <div className={main.infoName} style={styleThema2}>Github</div>
                            <div className={main.infoItemBox}>
                                <div><a href="https://github.com/Leewonno" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize:"30px", marginTop:"15px", color:"white"}} /></a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={main.lanternBox}>
                    <img src={lantern1} alt="랜턴" className={main.lantern1} style={styleThema}></img>
                    <img src={lantern2} alt="랜턴" className={main.lantern2} style={styleThema}></img>
                    <img src={lantern3} alt="랜턴" className={main.lantern3} style={styleThema}></img>
                    <img src={lantern4} alt="랜턴" className={main.lantern4} style={styleThema}></img>
                    <img src={lantern1} alt="랜턴" className={main.lantern5} style={styleThema}></img>
                    <img src={lantern2} alt="랜턴" className={main.lantern6} style={styleThema}></img>
                    <img src={lantern3} alt="랜턴" className={main.lantern7} style={styleThema}></img>
                    <img src={lantern4} alt="랜턴" className={main.lantern8} style={styleThema}></img>
                </div>
            </section>
        </>
    )
}
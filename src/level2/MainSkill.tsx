import main from "../css/main.module.css";
import { useContext, useEffect, useState } from "react";
import StatusContext from "../store/status-context";

export default function MainSkill(){
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
            <section id="skill" className={main.skill}>
                <div className={main.skillTitle} style={styleThema}>SKILL</div>
                <div className={main.skillBox} style={styleThema}>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"90%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"80%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"80%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"60%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TYPE" />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"50%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                            <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Nodejs" />   
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"80%"}}></div>
                            </div>
                        </div>
                    </div>
                    
                              
                </div>
            </section>
        </>
    )
}
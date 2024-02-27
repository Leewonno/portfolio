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
                    {/* <div className={main.skillItem}>
                        <div className={main.skillItemBox}>
                            <div className={main.skillImgBox}>
                                <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" style={{width:"100px"}} />
                            </div>
                            <div className={main.skillPercentBox}>
                                <div className={main.skillPercent} style={{width:"90%"}}></div>
                            </div>
                        </div>
                    </div> */}
                    <div className={main.skillCategory}>
                        <div className={main.skillCategoryTitle}>Frontend</div>
                        <div className={main.skillImgBox}>
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next" className={main.skillImg}/>
                        </div>
                    </div>
                    <div className={main.skillCategory}>
                        <div className={main.skillCategoryTitle}>Backend</div>
                        <div className={main.skillImgBox}>
                            <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Nodejs" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJs" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat&logo=springboot&logoColor=white" alt="springboot" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Oracle SQL-F80000?style=flat&logo=oracle&logoColor=white" alt="oracle" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="aws" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white" alt="Netlify" className={main.skillImg} />
                        </div>
                    </div>
                    <div className={main.skillCategory}>
                        <div className={main.skillCategoryTitle}>Programing</div>
                        <div className={main.skillImgBox}>
                            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TYPE" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" alt="java" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" alt="c++" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=white" alt="c" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="python" className={main.skillImg}/>
                        </div>
                    </div>
                    <div className={main.skillCategory}>
                        <div className={main.skillCategoryTitle}>Graphic</div>
                        <div className={main.skillImgBox}>
                            <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white" alt="photoshop" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/Premiere Pro-9999FF?style=flat&logo=adobepremierepro&logoColor=white" alt="premierepro" className={main.skillImg}/>
                            <img src="https://img.shields.io/badge/After Effects-9999FF?style=flat&logo=adobeaftereffects&logoColor=white" alt="aftereffect" className={main.skillImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
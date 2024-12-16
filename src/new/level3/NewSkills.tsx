import style from "../../css/newMain.module.css";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewSkills() {
  return (
    <>
      <section id="skill" className={style.skill}>
        <div className={style.skillTitleBox}>
          <div className={style.skillTitle}>
            <FontAwesomeIcon icon={faPaperclip} /> SKILLS
          </div>
        </div>
        <div className={style.skillBox}>
          <div className={style.skillCategory}>
            <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Programing</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JS" className={style.skillImg} />
                <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TYPE" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" alt="java" className={style.skillImg} />
                <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" alt="c++" className={style.skillImg} />
                <img src="https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=white" alt="c" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="python" className={style.skillImg} />
              </div>
            </div>
            <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Frontend</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next" className={style.skillImg} />          
                {/* <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="vite" className={style.skillImg} /> */}
                <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white" alt="redux" className={style.skillImg} />
                {/* <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=reactrouter&logoColor=white" alt="reactrouter" className={style.skillImg} /> */}
                <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white" alt="recoil" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" className={style.skillImg} />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML" className={style.skillImg} />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS" className={style.skillImg} />  
              </div>
            </div>
            
          </div>
          <div className={style.skillCategory}>
            <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Backend</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Nodejs" className={style.skillImg} />
                <img src="https://img.shields.io/badge/NestJs-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJs" className={style.skillImg} />
                {/* <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat&logo=springboot&logoColor=white" alt="springboot" className={style.skillImg} /> */}
                <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="springboot" className={style.skillImg} />
              </div>
            </div>
            <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Database</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" className={style.skillImg} />
                {/* <img src="https://img.shields.io/badge/Oracle SQL-F80000?style=flat&logo=oracle&logoColor=white" alt="oracle" className={style.skillImg} /> */}
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase" className={style.skillImg} />
              </div>
            </div>
            
          </div>
          <div className={style.skillCategory}>
            <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Deploy</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="aws" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white" alt="firebase" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white" alt="Netlify" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" className={style.skillImg} />
              </div>
            </div>
            {/* <div className={style.skillCategoryBox}>
              <div className={style.skillCategoryTitle}>Graphic</div>
              <div className={style.skillImgBox}>
                <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white" alt="photoshop" className={style.skillImg} />
                <img src="https://img.shields.io/badge/Premiere Pro-9999FF?style=flat&logo=adobepremierepro&logoColor=white" alt="premierepro" className={style.skillImg} />
                <img src="https://img.shields.io/badge/After Effects-9999FF?style=flat&logo=adobeaftereffects&logoColor=white" alt="aftereffect" className={style.skillImg} />
              </div>
            </div> */}
          </div>
          {/* <div className={style.skillCategory}>
            
          </div>
          <div className={style.skillCategory}>
            
          </div>
          <div className={style.skillCategory}>
            
          </div> */}
        </div>
        {/* <img src={bg} alt="섹션3_배경" className={style.skillBg}></img> */}
      </section>
    </>
  )
}
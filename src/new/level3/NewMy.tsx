import style from "../../css/newMain.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faCalendar, faEnvelope, faGraduationCap, faPlaneDeparture, faPaperclip, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewMy() {
  return (
    <>
      <section className={style.my} id="my">
        <div className={style.myBox}>
          <div className={style.aboutMeBox}>
            <div className={style.aboutMe}>
              <FontAwesomeIcon icon={faPaperclip} /> ABOUT ME
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.info}>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faUser} className={style.myIcon}/>
                </div>
                <div className={style.rightBox}>
                  <div className={style.infoName}>이름</div>
                  <div className={style.infoItemBox}>
                    이원노
                  </div>
                  </div>
                </div>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faCalendar} className={style.myIcon}/>
                </div>
                <div className={style.rightBox}>
                <div className={style.infoName}>생년월일</div>
                  <div className={style.infoItemBox}>
                    99.08.03
                  </div>
                </div>
              </div>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faEnvelope} className={style.myIcon} />
                </div>
                <div className={style.rightBox}>
                <div className={style.infoName}>이메일</div>
                  <div className={style.infoItemBox}>
                    dldnjssh123@naver.com
                  </div>
                </div>
              </div>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faGraduationCap} className={style.myIcon} />
                </div>
                <div className={style.rightBox}>
                <div className={style.infoName}>최종학력</div>
                  <div className={style.infoItemBox}>
                    남서울대학교
                  </div>
                  <div className={style.infoItemBox}>
                    (컴퓨터소프트웨어학과)
                  </div>
                </div>
              </div>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faPlaneDeparture} className={style.myIcon} />
                </div>
                <div className={style.rightBox}>
                <div className={style.infoName}>참여활동</div>
                  <div className={style.infoItemBox}>
                    포스코 X 코딩온 웹 풀스택 부트캠프 9기
                  </div>
                  <div className={style.infoItemBox}>
                    (2023.07~2023.12)
                  </div>
                </div>
              </div>
              <div className={style.itemBox}>
                <div className={style.leftBox}>
                  <FontAwesomeIcon icon={faBoxArchive} className={style.myIcon} />
                </div>
                <div className={style.rightBox}>
                <div className={style.infoName}>아카이빙</div>
                  <div className={style.infoItemBox}>
                    <a href="https://github.com/Leewonno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: "35px", color: "black" }} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
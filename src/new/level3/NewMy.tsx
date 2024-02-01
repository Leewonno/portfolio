import style from "../../css/newMain.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../../img/nmixx.png";

export default function NewMy() {
  return (
    <>
      <section className={style.my} id="my">
        <div className={style.myBox}>
          <div className={style.aboutMeBox}>
            <div className={style.aboutMe}>
              ABOUT ME
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.imgBox}>
              <img className={style.profileImg} src={""} alt="프로필 이미지"></img>
            </div>
            <div className={style.info}>
              <div className={style.nameBox}>
                <div className={style.name}>Leewonno</div>
              </div>
              <div className={style.infoName}>학력</div>
              <div className={style.infoItemBox}>
                <div>- 서산 서일고등학교</div>
                <div>- 남서울대학교 컴퓨터소프트웨어학과 2024.02 (졸업예정)</div>
              </div>
              <div className={style.infoName}>참여활동</div>
              <div className={style.infoItemBox}>
                <div>- 남서울대학교 제 27회 졸업작품 전시회 (2023.06)</div>
                <div>- 포스코 X 코딩온 웹 풀스택 부트캠프 9기 (2023.07~2023.12)</div>
              </div>
              <div className={style.infoName}>Email</div>
              <div className={style.infoItemBox}>
                <div>- dldnjssh123@naver.com</div>
              </div>
              <div className={style.infoName}>Github</div>
              <div className={style.infoItemBox}>
                <div><a href="https://github.com/Leewonno" target="_blank"><FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px", marginTop: "15px", color: "white" }} /></a></div>
              </div>
            </div>
          </div>

        </div>
        <img src={bg} alt="섹션1_배경" className={style.myBg}></img>
      </section>
    </>
  )
}
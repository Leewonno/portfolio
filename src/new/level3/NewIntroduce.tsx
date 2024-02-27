import bg from "../../img/nmixx_gray.png";
import style from "../../css/newMain.module.css";
import NewIntroContent from "../level2/NewIntroContent";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewIntroduce() {
  return (
    <>
      <section id="intro" className={style.intro}>
        <NewIntroContent />
        <img src={bg} alt="섹션1_배경" className={style.introBg}></img>
        <div className={style.downBox}> 
          <a href="#my" className={style.down}><FontAwesomeIcon icon={faChevronDown} className={style.downIcon}/></a>
        </div>
      </section>
    </>
  )
}
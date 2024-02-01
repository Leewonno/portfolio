import bg from "../../img/nmixx_gray2.png";
import style from "../../css/newMain.module.css";

export default function NewIntroduce() {
  return (
    <>
      <section id="intro" className={style.intro}>
        <img src={bg} alt="섹션1_배경" className={style.introBg}></img>
      </section>
    </>
  )
}